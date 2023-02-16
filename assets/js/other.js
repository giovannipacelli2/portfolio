'use strict'

let aboutMeSection = document.body.querySelector("#aboutme");

let visible = false;

aboutMeSection.addEventListener( "click", check );

function check(e) {

    let target = e.target;

    if ( target.classList.contains("other") ) {

        let other = e.target;

        let show = aboutMeSection.querySelector("#continue");

        other.classList.add("d-none");
        show.classList.add("d-inline");

        visible = true;

        this.onblur = ()=> {
            other.classList.remove("d-none");
        show.classList.remove("d-inline");
            
            this.onblur = null;
        }

    }
}