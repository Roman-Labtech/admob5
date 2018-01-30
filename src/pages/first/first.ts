import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobPro } from '@ionic-native/admob-pro';
import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'page-first',
    templateUrl: 'first.html'
})
export class FirstPage {
    constructor(public navCtrl: NavController, platform: Platform, private admob: AdMobPro, public alertCtrl: AlertController) {
        platform.ready().then(() => {
            var admobid = {
                banner: 'ca-app-pub-3940256099942544/6300978111',
                interstitial: 'ca-app-pub-3940256099942544/1033173712'
            };

            this.admob.createBanner({
                adId: admobid.banner,
                isTesting: true,
                autoShow: true,
                position: this.admob.AD_POSITION.BOTTOM_CENTER
            })

            this.admob.prepareInterstitial({
                adId: admobid.interstitial,
                isTesting: true,
                autoShow: false
            })
        });
    }

    showInterstitialAd() {
        if (AdMobPro) {
            this.admob.showInterstitial();
        }
    }
	
	public inp1;
	public inp2;
	public inp3;
	
	Alertshow()
	{		

	}
	
	showAlert() {
    var xx;	
	var x1=this.inp1;
	var x2=this.inp2;
	var x3=this.inp3;
var a=x1;
var b=x2;
var c=x3;

		

	var x1=this.inp1;
		x1=Number(x1);
	var x2=this.inp2;
		x2=Number(x2);	
	var x3=this.inp3; 
		x3=Number(x3);
	var s=x1*x2*x3;	
		
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Total S=' + '&nbsp'+ '&nbsp'+ '&nbsp'+ '&nbsp'+ s,
      buttons: ['OK']
    });
    alert.present();
  }	
	

	link3stor(){
		this.navCtrl.push('ListPage');
	}
	



tristor(){


var a=x1;
var b=x2;
var c=x3;
//Проверка на числа
if (!isNaN(parseFloat(a)) && isFinite(a) &&(a>0)){
if (!isNaN(parseFloat(b)) && isFinite(b) &&(b>0)){
if (!isNaN(parseFloat(c)) && isFinite(c) &&(c>0)){
	  //Проверка на существование треугольника          
    if(a<b+c){
		if(b<a+c){
			if(c<a+b){
				xx=(a+b+c)/2;			  
						xx=xx*(xx-a)*(xx-b)*(xx-c)						
						xx=Math.sqrt(xx);	  
				 myApp.alert(xx, 'Результат');
			}
		}	
	}
    else{
		  myApp.alert('Введите верное числовое значение. Треугольник с такими сторонами не существует', 'Ошибка!');
	};
 }}}
	else
{
	  myApp.alert('Треугольник не существует. Введите корректные значения', 'Ошибка!');

};



	  }
}