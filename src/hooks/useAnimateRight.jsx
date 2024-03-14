import { useEffect } from "react";

export const useAnimatedRight = (ref, update) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        const Container = (ref).current;
        if (Container) {
            Container.classList.add('animate-fade-right');
            const onAnimationEnd = () => {
                Container.classList.remove('animate-fade-right');
            };
            Container.addEventListener('animationend', onAnimationEnd);
            return () => {
                Container.removeEventListener('animationend', onAnimationEnd);
            };
        }
    }, [update]);

}
export const useAnimatedDown = (ref, update) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        const Container = (ref).current;
        if (Container) {
            Container.classList.add('animate-flip-down');
            const onAnimationEnd = () => {
                Container.classList.remove('animate-flip-down');
            };
            Container.addEventListener('animationend', onAnimationEnd);
            return () => {
                Container.removeEventListener('animationend', onAnimationEnd);
            };
        }
    }, [update]);

}
export const useAnimatedJump = (ref, update) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        const Container = (ref).current;
        if (Container) {
            Container.classList.add('animate-jump-in');
            const onAnimationEnd = () => {
                Container.classList.remove('animate-jump-in');
            };
            Container.addEventListener('animationend', onAnimationEnd);
            return () => {
                Container.removeEventListener('animationend', onAnimationEnd);
            };
        }
    }, [update]);

}