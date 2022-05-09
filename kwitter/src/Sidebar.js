import React from "react";
import './Sidebar.css'
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { Button } from "@mui/material";

function Sidebar(){
    return( 
        <div className="sidebar">
            {/* Kwitter icon */}
            <FlutterDashIcon className="sidebar-kwitterIcon"/>

            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={TagIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineOutlinedIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltOutlinedIcon} text="Lists"/>
            <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizRoundedIcon} text="More"/>

            {/* Button-> Kweet */}
            <Button variant="outlined" className="sidebar_kweet" fullWidth>Kweet</Button>
            

        </div>
 
    )
}

export default Sidebar;