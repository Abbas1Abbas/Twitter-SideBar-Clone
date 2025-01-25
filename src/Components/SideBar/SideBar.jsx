import React, { useEffect, useRef, useState } from 'react'
import './SideBar.css'
import { LogoSVGIcon, HomeSVGIcon, ExploreSVGIcon, NotificationSVGIcon, MessageSVGIcon, GrokSVGIcon, CommunitiesSVGIcon, BusinessSVGIcon, ProfileSVGIcon, MoreSVGIcon, ListSVGIcon, MonetizationSVGIcon, AdsSVGIcon, CreateYourSpaceSVGIcon, SettingAndPrivacySVGIcon } from '../Icons/Icon'

const SideBar = () => {

    const [current, setCurrent] = useState(1);
    const [subCurrent, setSubCurrent] = useState(0);
    const [isSubActive, setIsSubActive] = useState(false);
    const sideBarRef = useRef();

    const handleClickOutside = () => {
        if(sideBarRef.current && !sideBarRef.current.contains(event.target)){
            setIsSubActive(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('click', handleClickOutside);

        return () => window.removeEventListener('click', handleClickOutside);
    },[]);

    return (
        <div ref={sideBarRef} className='sideBarMainDiv'>

            <div className="sideLinks">
                <span><LogoSVGIcon /></span>
                <span></span>
            </div>
            <div onClick={() => setCurrent(1)} className="sideLinks">
                <span><HomeSVGIcon color={current === 1 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                <span>Home</span>
            </div>
            <div onClick={() => setCurrent(2)} className="sideLinks">
                <span><ExploreSVGIcon color={current === 2 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                <span>Explore</span>
            </div>
            <div onClick={() => setCurrent(3)} className="sideLinks">
                <span><NotificationSVGIcon color={current === 3 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                <span>Notifications</span>
            </div>
            <div onClick={() => setCurrent(4)} className="sideLinks">
                <span><MessageSVGIcon color={current === 4 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                <span>Message</span>
            </div>
            <div onClick={() => setCurrent(5)} className="getHid sideLinks">
                <span><GrokSVGIcon color={current === 5 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                <span>Grok</span>
            </div>
            <div onClick={() => setCurrent(6)} className="getHid sideLinks">
                <span><CommunitiesSVGIcon color={current === 6 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                <span>Communities</span>
            </div>
            <div onClick={() => setCurrent(7)} className="getHid sideLinks">
                <span><LogoSVGIcon color={current === 7 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                <span>Premium</span>
            </div>
            <div onClick={() => setCurrent(8)} className="getHid sideLinks">
                <span><BusinessSVGIcon color={current === 8 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                <span>Business</span>
            </div>
            <div onClick={() => setCurrent(9)} className="getHid sideLinks">
                <span><ProfileSVGIcon color={current === 9 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                <span>Profile</span>
            </div>
            <div onClick={() => {
                setCurrent(10);
                setIsSubActive((prev)=>!prev);
            }} className="sideLinks">
                <span><MoreSVGIcon color={current === 10 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                <span>More</span>
            </div>
            <div className="sideLinks getHidSpecial">
                <span>
                    <button>Post</button>
                </span>
            </div>

            <div style={{display: isSubActive?"block":"none"}} className="subSideLinks">

                <div onClick={() => setSubCurrent(1)} className='sideLinkSub'>
                    <span><ListSVGIcon color={subCurrent === 1 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                    <span>Lists</span>
                </div>

                <div onClick={() => setSubCurrent(2)} className='sideLinkSub'>
                    <span><MonetizationSVGIcon color={subCurrent === 2 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                    <span>Monetization</span>
                </div>

                <div onClick={() => setSubCurrent(3)} className='sideLinkSub'>
                    <span><AdsSVGIcon color={subCurrent === 3 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                    <span>Ads</span>
                </div>

                <div onClick={() => setSubCurrent(4)} className='sideLinkSub'>
                    <span><CreateYourSpaceSVGIcon color={subCurrent === 4 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                    <span>Create Your Space</span>
                </div>

                <div onClick={() => setSubCurrent(5)} className='sideLinkSub'>
                    <span><SettingAndPrivacySVGIcon color={subCurrent === 5 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                    <span>Setting and Privacy</span>
                </div>

                <div onClick={() => setSubCurrent(6)} className='asGetHid sideLinkSub'>
                    <span><GrokSVGIcon color={subCurrent === 6 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                    <span>Grok</span>
                </div>

                <div onClick={() => setSubCurrent(7)} className='asGetHid sideLinkSub'>
                    <span><CommunitiesSVGIcon color={subCurrent === 7 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                    <span>Communities</span>
                </div>

                <div onClick={() => setSubCurrent(8)} className='asGetHid sideLinkSub'>
                    <span><LogoSVGIcon color={subCurrent === 8 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                    <span>Premium</span>
                </div>

                <div onClick={() => setSubCurrent(9)} className='asGetHid sideLinkSub'>
                    <span><BusinessSVGIcon color={subCurrent === 9 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                    <span>Bussiness</span>
                </div>

                <div onClick={() => setSubCurrent(10)} className='asGetHid sideLinkSub'>
                    <span><ProfileSVGIcon color={subCurrent === 10 ? "rgb(231, 233, 234)" : "#ffffff"} /></span>
                    <span>Profile</span>
                </div>

            </div>

        </div>
    )
}

export default SideBar