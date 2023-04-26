import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Options } from "./BackGround.options";

function BackGround(){

    const particlesInit = useCallback(async engine => {
        /* console.log(engine); */
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        /* await console.log(container); */
    }, []);

    return(
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={Options}
        />
    )
}

export default BackGround;