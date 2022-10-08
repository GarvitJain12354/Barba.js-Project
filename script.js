

function anim() {


    gsap.to("#o1>span", {
        opacity: 1,
        // duration:2,
        delay: .5,
        stagger: {
            each: .5,
            amount: 1
        }
    })
    gsap.to("#o11>span", {
        opacity: 1,
        // duration:2,
        delay: .5,
        stagger: {
            each: .5,
            amount: 1
        }
    })
    gsap.to("#o4>span", {
        opacity: 1,
        // duration:2,
        delay: .5,
        stagger: {
            each: .5,
            amount: 1
        }
    })
    gsap.to("#o41>span", {
        opacity: 1,
        // duration:2,
        delay: .5,
        stagger: {
            each: .5,
            amount: 1
        }
    })
    gsap.to("#right>span", {
        opacity: 1,
        // duration:2,
        delay: .5,
        stagger: {
            each: .5,
            amount: 2
        }
    })
    gsap.from("#o3>h1", {
        y: "-150%",
        duration: 1,

    })
    gsap.from("#o31>h1", {
        y: "-150%",
        duration: 1,

    })
    gsap.from("#o31>h3", {
        y: "-350%",
        duration: 1,

    })
    gsap.from("#o2>h1", {
        y: 20,
        duration: 1,
        delay:1,
        opacity: 0

    })
    gsap.from("#o2>h3", {
        y: 20,
        duration: 1,
        delay:2,

        opacity: 0
    })
    gsap.from("#o2>p", {
        y: 20,
        duration: 1,
        delay:3,

        opacity: 0
    })
    gsap.from("#o2", {
        y: -50,
        duration: 2
    })
    gsap.from("#dets>h2,#nav>i", {
        y: 10,
        opacity: 0,

        stagger: .5
    })
    gsap.from("#bottom>i", {
        y: 10,
        opacity: 0,
        delay: .5,
        stagger: 1
    })
}
barba.init({
    sync: true,
    transitions: [
        {
            enter() {
                anim()
            }
        }
    ]
}

)