import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import gsap from 'gsap';

import '../css/Mobile.css'

import Logo from '../assets/Logo.png';
import Machus from '../assets/machus.png';
import MachusR from '../assets/machus-r.png';

import Online from '../assets/Online'
import Members from '../assets/Members'
import Divine from '../assets/Divine'
import Knowledge from '../assets/Knowledge'

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Offer = () => {
    const [userData, setUserData] = useState({})
    const currentRoute = window.location.pathname;
    const parts = currentRoute.split('/');
    const boxRef = useRef(null);

    // Extract the part after the second "/"
    const currentOfferID = parts.length >= 3 ? parts[2] : null;

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    useEffect(() => {
        getOfferByID(currentOfferID)
    }, [currentOfferID])

    useEffect(() => {
        // GSAP animation example
        gsap.to('.box', { duration: 0.8, height: '100%', ease: 'power1.inOut' });
        gsap.to('.heading-one', { delay: 0.8, duration: 0.8, opacity: 0.7, y: '-50px', ease: 'power1.inOut' });
        gsap.to('.heading-middle', { delay: 1.6, duration: 0.8, opacity: 0.5, y: '-65px', ease: 'power1.inOut' });
        gsap.to('.heading-two', { delay: 2.4, duration: 0.8, opacity: 0.3, y: '-70px', ease: 'power1.inOut' });
        gsap.to('.logo', { delay: 3.2, duration: 0.4, opacity: 1, y: '-35px', ease: 'power1.inOut' });
        gsap.to('.clan', { delay: 3.2, duration: 0.4, opacity: 1, y: '-45px', ease: 'power1.inOut' });
        gsap.to('.accept-btn', { delay: 3.2, duration: 0.4, opacity: 1, y: '-10px', ease: 'power1.inOut' })
        gsap.to('.heading-last', { delay: 6.8, duration: 0.4, opacity: 0.6, ease: 'power1.inOut' })
        gsap.to('.bottom-box', { delay: 3.8, duration: 0.5, opacity: 1, bottom: '0px', ease: 'power1.inOut' })

        gsap.to('.card1', { delay: 4.5, duration: 0.4, opacity: 1, bottom: '0px', ease: 'power1.inOut' })
        gsap.to('.card2', { delay: 5, duration: 0.4, opacity: 1, bottom: '0px', ease: 'power1.inOut' })
        gsap.to('.card3', { delay: 5.5, duration: 0.4, opacity: 1, bottom: '0px', ease: 'power1.inOut' })
        gsap.to('.card4', { delay: 6, duration: 0.4, opacity: 1, bottom: '0px', ease: 'power1.inOut' })


    }, []);

    useEffect(() => {
        // Define the GSAP animation
        const animation = gsap.to(boxRef.current, {
            boxShadow: '0 15px 50px -12px rgba(203,154,104,0.7)', // Example: Move the element 200 pixels to the right
            duration: 3, // Duration of the animation in seconds
            ease: 'linear', // Easing function (linear for constant speed)
            repeat: -1, // Infinite repeat
            yoyo: true, // Reverse the animation on each repeat
        });

        // Cleanup function to cancel the animation when the component unmounts
        return () => {
            animation.kill(); // Cancel the animation
        };
    }, []);


    const getOfferByID = async (id) => {
        const BASE_URL = "https://forum-gladiatora-api-71bf050544da.herokuapp.com"
        try {
            const result = await axios.get(`${BASE_URL}/offer/${id.toUpperCase()}/`, { id })
            setUserData(result.data)
        } catch (err) {

        }
    }

    const APPLY_LINK = "https://s301-en.gladiatus.gameforge.com/game/index.php?mod=guild&submod=application&i=14&sh=a03e788151f57269f6dd6a975af9a668"

    const handleOpenApplyLink = () => {
        window.open(APPLY_LINK, '_blank')
    }

    console.log('user', userData)

    return (
        <div className="App overflow-hidden">
            <div className="w-full h-full relative flex flex-col">
                <Particles id="tsparticles" options={{
                    background: {
                        color: {
                            value: "",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 1,
                            },
                            repulse: {
                                distance: 0,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },

                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 100,
                            },
                            value: 3,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle", // "circle"
                        },
                        size: {
                            value: { min: 1, max: 2 },
                        },
                    },
                    detectRetina: true,
                }} init={particlesInit} loaded={particlesLoaded} />

                <div className="w-[35%] bg-[#1E1E1E] bg-opacity-40 absolute h-[0%] blur-[1px] left-[50%] translate-x-[-50%] box">
                </div>
                <p className="text-white mt-24 text-[40px] font-Julius heading-one opacity-0">Ave, {userData?.recipient_name}</p>
                <hr className="bg-white w-[30%] mx-auto my-2 mt-6 heading-middle opacity-0" />
                <p className="text-white mt-2 text-[16px] font-Julius heading-two opacity-0">You are invited to join, the best</p>

                <div className="h-[165px] w-[185px] mx-auto z-10 logo opacity-0 scale-to-mid mobile-logo-top">
                    <img src={Logo} alt='+' className="w-full h-full" />
                </div>

                <p className="text-white mt-8 text-[36px] font-Julius clan opacity-0 tracking-widest text-shadow bg-none z-10 mobile-hs">FORUM_GLADIATORA</p>

                <button ref={boxRef} onClick={() => handleOpenApplyLink()} className="accept-btn mobile-btn-top opacity-0 text-[20px] font-Julius scale-to-mid text-[#D29E6B] border rounded-full border-[#D29E6B] mx-auto z-20 bg-[#1E1E1E] bg-opacity-60 w-max py-2 px-12 shadow-[0_15px_50px_-12px_rgba(203,154,104,0.7)]">ACCEPT INVITATION</button>

                <p className="text-white text-[12px] font-Julius heading-last opacity-0 z-10 mt-[10px] smaller-text">You still need to apply,<br />
                    don’t worry you have the slip </p>

                <div className="w-full h-[30vh] bg-[#1E1E1E] bg-opacity-40 absolute bottom-[-200px] opacity-0 bottom-box mobile-box">
                    <div className="relative h-full w-full">
                        <div className="h-[200px] w-[180px] z-10 absolute left-10 bottom-[-5px] mobile-hide">
                            <img src={Machus} alt='a' className="w-full h-full" />
                        </div>
                    </div>
                    <div className="relative h-full w-full">
                        <div className="h-[200px] w-[180px] z-10 absolute right-10 bottom-[100%] mobile-hide">
                            <img src={MachusR} alt='a' className="w-full h-full" />
                        </div>
                    </div>
                    <div className="w-max flex flex-row absolute bottom-[40px] left-[50%] translate-x-[-50%] gap-10 mobile-col">
                        <div className="flex flex-col items-center gap-6 opacity-0 card1 scale-to-small">
                            <div className="w-[30px] h-[30px] time-on-small"><Online /></div>
                            <p className="font-Julius text-white text-[28px] text-shadow tracking-wide small-text">24/7</p>
                            <p className="font-Julius text-[#CB9A68] text-shadow">GLADIATORS ONLINE</p>
                        </div>
                        <div className="flex flex-col items-center gap-6 opacity-0 card2 scale-to-small">
                            <div className="w-[30px] h-[30px] helmet-on-small-r"><Members /></div>
                            <p className="font-Julius text-white text-[28px] text-shadow tracking-wide small-text p-on-small">63</p>
                            <p className="font-Julius text-[#CB9A68] text-shadow">ACTIVE MEMBERS</p>
                        </div>
                        <div className="flex flex-col items-center gap-6 opacity-0 card3 scale-to-small">
                            <div className="w-[30px] h-[30px] helmet-on-small"><Divine /></div>
                            <p className="font-Julius text-white text-[28px] text-shadow tracking-wide small-text">15</p>
                            <p className="font-Julius text-[#CB9A68] text-shadow">GLADIATORS IN TOP 50</p>
                        </div>
                        <div className="flex flex-col items-center gap-6 opacity-0 card4 scale-to-small">
                            <div className="w-[30px] h-[30px]"><Knowledge /></div>
                            <p className="font-Julius text-white text-[28px] text-shadow tracking-wide small-text">UNLIMITED</p>
                            <p className="font-Julius text-[#CB9A68] text-shadow">KNOWLDEGE SHARING</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer;