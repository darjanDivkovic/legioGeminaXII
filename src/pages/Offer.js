import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import gsap from 'gsap';

import '../css/Mobile.css'

import Logo from '../assets/Logo.png';
import Machus from '../assets/machus.png';
import MachusR from '../assets/machus-r.png';

import Online from '../assets/Online'
import Members from '../assets/Members'
import Rank from '../assets/Rank'
import Divine from '../assets/Divine'
import Knowledge from '../assets/Knowledge'

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import classNames from "classnames";

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
        gsap.to('.heading-last', { delay: 6.4, duration: 0.4, opacity: 0.6, ease: 'power1.inOut' })
        gsap.to('.bottom-box', { delay: 3.8, duration: 0.5, opacity: 1, bottom: '0px', ease: 'power1.inOut' })

        gsap.to('.card1', { delay: 4.5, duration: 0.4, opacity: 1, bottom: '0px', ease: 'power1.inOut' })
        gsap.to('.card2', { delay: 5, duration: 0.4, opacity: 1, bottom: '0px', ease: 'power1.inOut' })
        gsap.to('.card3', { delay: 5.5, duration: 0.4, opacity: 1, bottom: '0px', ease: 'power1.inOut' })
        gsap.to('.card4', { delay: 6, duration: 0.4, opacity: 1, bottom: '0px', ease: 'power1.inOut' })


    }, []);

    useEffect(() => {
        // Define the GSAP animation
        const animation = gsap.to(boxRef.current, {
            boxShadow: '0 15px 70px -12px rgba(186,0,0,0.7)', // Example: Move the element 200 pixels to the right
            duration: 1.8, // Duration of the animation in seconds
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
            console.log('result data', result.data)
            setUserData(result.data)
        } catch (err) {

        }
    }

    const APPLY_LINK = "https://s301-en.gladiatus.gameforge.com/game/index.php?mod=guild&submod=application&i=14&sh=a03e788151f57269f6dd6a975af9a668"

    const handleOpenApplyLink = () => {
        window.open(APPLY_LINK, '_blank')
    }

    console.log('user', userData)

    function calculateTimePassedFormatted(dateString) {
        const inputDate = new Date(dateString);
        const currentDate = new Date();
        const timeDifference = currentDate - inputDate;
        const millisecondsInDay = 1000 * 60 * 60 * 24;
        const daysPassed = Math.round(timeDifference / millisecondsInDay);

        return `${daysPassed} days`;
    }

    const time_since_join = calculateTimePassedFormatted(userData?.date_joined)

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
                <p className="text-white mt-2 text-[16px] font-Julius heading-two opacity-0 h-smal" >
                    {
                        !userData.is_member ? ("You are invited to join, the best") : ("the ground trembles and the crowd roars as you walk in")
                    }
                </p>

                <div className="h-[165px] w-[155px] mx-auto z-10 logo opacity-0 scale-to-mid mobile-logo-top mt-[30px]">
                    <img src={Logo} alt='+' className="w-full h-full" />
                </div>

                <p className={classNames(
                    "text-white mt-2 text-[36px] font-Julius clan opacity-0 tracking-widest text-shadow bg-none z-10 mobile-hs mt-8",
                    userData?.is_member && "heading-on-low"
                )}>FORUM_GLADIATORA</p>

                <p className="text-white text-[13px] font-Julius heading-last opacity-0 z-10 mt-[5px] mb- smaller-text w-full flex items-center justify-center">
                    {
                        userData?.is_member ? (
                            <p className="w-[30%] ">
                                Your dedication, resilience, and unwavering commitment to our shared goals have not gone unnoticed.
                                <br></br><br></br>
                                thank you, dear {userData?.recipient_name}, for your unwavering dedication, your indomitable spirit, and the countless ways you contribute to making our alliance a force to be reckoned with. May your swords stay sharp, your shields never falter, and may our bond grow stronger with each passing battle.
                                <br></br><br></br>
                                <span className="underline underline-offset-4">Onward to victory!</span>
                            </p>
                        ) : (
                            <p className="w-[400px] mb-8">
                                You still need to apply,
                                don’t worry you have the slip
                            </p>
                        )
                    }

                </p>

                {
                    !userData?.is_member && (<button ref={boxRef} onClick={() => handleOpenApplyLink()} className="accept-btn mobile-btn-top opacity-0 text-[20px] font-Julius scale-to-mid text-[#D29E6B] border rounded-full border-[#D29E6B] mx-auto z-20 bg-[#1E1E1E] bg-opacity-60 w-max py-2 px-12 shadow-[0_7px_30px_-12px_rgba(186,0,0,0.7)]">ACCEPT INVITATION</button>)
                }

                <div className="w-full h-[30vh] bg-[#1E1E1E] bg-opacity-40 absolute bottom-[-200px] opacity-0 bottom-box mobile-box">
                    <div className="relative h-full w-full">
                        <div className="h-[200px] w-[180px] z-10 absolute left-10 bottom-[-5px] mobile-hide">
                        </div>
                    </div>
                    <div className="relative h-full w-full">
                        <div className="h-[200px] w-[180px] z-10 absolute right-10 bottom-[100%] mobile-hide">
                        </div>
                    </div>
                    {
                        !userData?.is_member ? (
                            <div className="w-max flex flex-row absolute bottom-[40px] left-[50%] translate-x-[-50%] gap-[100px] mobile-col">
                                <div className="flex flex-col items-center gap-6 opacity-0 card1 scale-to-small">
                                    <div className="w-[30px] h-[30px] time-on-small"><Online /></div>
                                    <p className="font-Julius text-white text-[28px] text-shadow tracking-wide small-text">24/7</p>
                                    <p className="font-Julius text-[#CB9A68] text-shadow">GLADIATORS ONLINE</p>
                                </div>
                                <div className="flex flex-col items-center gap-6 opacity-0 card2 scale-to-small">
                                    <div className="w-[30px] h-[30px] helmet-on-small-r"><Members /></div>
                                    <p className="font-Julius text-white text-[28px] text-shadow tracking-wide small-text p-on-small">67 / 69</p>
                                    <p className="font-Julius text-[#CB9A68] text-shadow">ACTIVE MEMBERS</p>
                                </div>
                                <div className="flex flex-col items-center gap-6 opacity-0 card3 scale-to-small">
                                    <div className="w-[30px] h-[30px] helmet-on-small"><Divine /></div>
                                    <p className="font-Julius text-white text-[28px] text-shadow tracking-wide small-text">15</p>
                                    <p className="font-Julius text-[#CB9A68] text-shadow">GLADIATORS IN TOP 50</p>
                                </div>
                                <div className="flex flex-col items-center gap-6 opacity-0 card4 scale-to-small">
                                    <div className="w-[30px] h-[30px]"><Knowledge /></div>
                                    <p className="font-Julius text-white text-[28px] text-shadow tracking-wide small-text mobile-knowledge">UNLIMITED</p>
                                    <p className="font-Julius text-[#CB9A68] text-shadow mobile-knowledge">KNOWLEDGE SHARING </p>
                                </div>
                            </div>
                        ) : (
                            <div className="w-max flex flex-row absolute bottom-[40px] left-[50%] translate-x-[-50%] gap-10 mobile-col">
                                <div className="flex flex-col items-center gap-6 opacity-0 card1 scale-to-small">
                                    <div className="w-[30px] h-[30px] helmet-on-small-r"><Members /></div>
                                    <p className="font-Julius text-white text-[28px] text-shadow tracking-wide small-text">{time_since_join}</p>
                                    <p className="font-Julius text-[#CB9A68] text-shadow">You Served For</p>
                                </div>
                                <div className="flex flex-col items-center gap-6 opacity-0 card2 scale-to-small">
                                    <div className="w-[30px] h-[30px] time-on-small"><Rank /></div>
                                    <p className="font-Julius text-white text-[28px] text-shadow tracking-wide small-text">{userData?.rank}</p>
                                    <p className="font-Julius text-[#CB9A68] text-shadow">YOUR RANK</p>
                                </div>
                                {
                                    userData?.is_top_fifteen && (
                                        <div className="flex flex-col items-center gap-6 opacity-0 card3 scale-to-small">
                                            <div className="w-[30px] h-[30px] helmet-on-small"><Divine /></div>
                                            <p className="font-Julius text-white text-[28px] text-shadow tracking-wide small-text p-on-small">CHAMPION</p>
                                            <p className="font-Julius text-[#CB9A68] text-shadow">you are in top 50</p>
                                        </div>
                                    )
                                }

                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Offer;