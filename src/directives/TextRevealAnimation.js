import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
    mounted(el) {
        const textChars = el.querySelectorAll('.js_char');
        gsap.set(textChars, { opacity: 0 });

        textChars.forEach((char, index) => {
            gsap.to(char, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: char,
                    start: 'top 80%',
                    end: '+=50',
                }
            });
        });
    }
};