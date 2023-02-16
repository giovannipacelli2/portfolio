'use strict'

let aboutMeSection = document.body.querySelector("#aboutme");

let visible = false;

aboutMeSection.addEventListener( "click", check );

function check(e) {

    let target = e.target;

    if ( target.classList.contains("other") ) {

        let other = e.target;

        let show = aboutMeSection.querySelector("#continue");

        other.style.display = "none";
        show.style.display = "inline";

        visible = true;

        this.onblur = ()=> {
            other.style.display = "inline";
            show.style.display = "none";
            
            this.onblur = null;
        }

    }
}