import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Output, SimpleChanges } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Subscription, catchError, of } from 'rxjs';
import { ApiService } from 'src/app/services/apiService';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-atualizar-foto',
  templateUrl: './atualizar-foto.component.html',
  styleUrls: ['./atualizar-foto.component.scss'],
    
})
export class AtualizarFotoComponent  implements OnInit {

  files! : Set<File>;
  foto: any;
  prestadorId!: number;
  prestadores: any;
  selectedFiles : any
  private fotoAtualizadaSubscription: Subscription;

  //icon padrão para foto ausente no servidor
  defaultPhotoUrl: string = 'assets/images/default-photo.jpg';
  
  constructor(
    private apiService:ApiService,
    private eventService:EventService,
    private http: HttpClient,
    private alertController: AlertController
    ) {
      //monitora quando emite evento upload da foto na linha 50 
      this.fotoAtualizadaSubscription = this.eventService.fotoAtualizada$.subscribe(() => {
        this.readPrestador();
      });
     }

  ngOnInit() {
    this.prestadorId = this.apiService.readId()
    this.readPrestador();
   
  }


   ngOnDestroy() {
    // Cancelar a inscrição no observável para evitar vazamentos de memória
    this.fotoAtualizadaSubscription.unsubscribe();
  }
  onChange(event:any){
      this.selectedFiles = event.srcElement.files;
    
  }

  onUpload() {
    if(this.selectedFiles){
        const formData = new FormData();
        formData.append('arquivo', this.selectedFiles[0], this.selectedFiles[0].name);
        this.apiService.putFotos(formData).subscribe(
          (response: any) => {
            this.eventService.emitFotoAtualizada();
            this.mostrarAlerta('Sua foto foi atualizada!');
          },
          (error) => {
            console.error("Erro ao cadastrar: ", error);
            this.mostrarAlerta('Erro! Verifique os dados e tente novamente!');      
          }
        );
    } else {
      this.mostrarAlerta('Por favor, selecione uma foto para atualizar.');
   }   

  }

//Deletar foto existente no Banco de Dados
onExcluirFoto() {

  this.apiService.delFotos().subscribe(
    (response: any) => {
      this.eventService.emitFotoAtualizada();
      this.mostrarAlerta('Sua foto foi excluída!');
    },
    (error) => {
      console.error("Erro ao cadastrar: ", error);
      this.mostrarAlerta('Erro! Verifique os dados e tente novamente.');
       }
  );
}

  async mostrarAlerta(mensagem: string) {
    const alert = await this.alertController.create({
      header:'',
      message: mensagem,
      buttons: ['OK']
    });
  await alert.present();
  }

  readPrestador(): void {
    this.apiService.getDataPerfisPrestadores().subscribe(
      (data) => {
        this.prestadores = data;
      for (const prestador of this.prestadores.conteudo) {
          this.getImagemUrl(prestador.id);
        }
      },
      (error) => {
        console.error('Erro ao obter dados dos prestadores:', error);
      }
    );
  }

  getImagemUrl(id: number) {
    this.apiService.getFotoByIdListaPrestadores(id)
    .pipe(
      catchError((error) => {
        if (error.status === 404) {
          return of(null); 
        } else {
          throw error; 
        }
      })
    )    
    .subscribe((data) => {      
      if (data !== null && data.nomeArquivo) {
        // Existe foto cadastrada...
         const nomeArquivoTransformado  = data.nomeArquivo;
         this.foto = data;     
         const imgUrl = this.foto ? `assets/images/${nomeArquivoTransformado}` : this.defaultPhotoUrl;
         const prestador = this.prestadores.conteudo.find((p: any) => p.id === id);
         if (prestador) prestador.imgUrl = imgUrl;                  
        }else{
          //Não existe foto no servidor...
          const imgUrl = this.defaultPhotoUrl;
          const prestador = this.prestadores.conteudo.find((p: any) => p.id === id);
          if(prestador) prestador.imgUrl = imgUrl;         
        }
      },
      (error) => {
        console.error('Erro ao obter dados da foto', error);
      }
    );
  }  
}
