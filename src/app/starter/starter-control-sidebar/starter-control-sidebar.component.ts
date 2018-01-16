import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-starter-control-sidebar',
  templateUrl: './starter-control-sidebar.component.html',
  styleUrls: ['./starter-control-sidebar.component.css']
})
export class StarterControlSidebarComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    this.teste2();
      this.teste3();
  }

  /** Função javvascript para modificar a cor do layout */
    teste2() {
        // console.log('teste');
        var currentSkin = 'skin-black-light';

        $('.list-unstyled [data-skin]').click(function (e) {
            e.preventDefault();
            var skinName = $(this).data('skin');
            $('body').removeClass(currentSkin);
            $('body').addClass(skinName);
            currentSkin = skinName;
        });
    }

    teste3() {
        $('.config_theme [data-layout]').click( function (e) {
            e.preventDefault();
            console.log('peguei propriedade');
        })
    }

}
