import React, {useEffect} from 'react'

export default function Sidebar() {
    useEffect(() => {
        let arrow = document.querySelectorAll(".arrow");
        for (var i = 0; i < arrow.length; i++) {
            arrow[i].addEventListener("click", (e)=>{
                let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
                arrowParent.classList.toggle("showMenu");
            });
        }
        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".bx-menu");
        console.log(sidebarBtn);
        sidebarBtn.addEventListener("click", ()=>{
            sidebar.classList.toggle("close"); 
        });
                   }, [])
    return (
        <div class="sidebar close">
            <div class="logo-details">
                <i class='bx bxl-c-plus-plus'></i>
                <span class="logo_name">MANISH</span>
            </div>
            <ul class="nav-links">
                <li>
                    <a href="#">
                    <i class='bx bx-grid-alt' ></i>
                    <span class="link_name">Aquimo</span>
                    </a>
                    <ul class="sub-menu blank">
                    <li><a class="link_name" href="#">Games</a></li>
                    </ul>
                </li>
                <li>

                <div class="icon-link">
                    <a href="#">
                        <i class='bx bx-collection' ></i>
                        <span class="link_name">Games</span>
                    </a>
                    <i class='bx bxs-chevron-down arrow' ></i>
                </div>

                <ul class="sub-menu">
                    <li><a class="link_name" href="#">Games</a></li>
                    <li><a href="#">Mets</a></li>
                    <li><a href="#">GoReds</a></li>
                    <li><a href="#">Nashville</a></li>
                </ul>
                </li>
                <li>

                <div class="icon-link">
                    <a href="#">
                        <i class='bx bx-book-alt' ></i>
                        <span class="link_name">Live</span>
                    </a>
                    <i class='bx bxs-chevron-down arrow' ></i>
                </div>


                <ul class="sub-menu">
                    <li><a class="link_name" href="#">Live</a></li>
                    <li><a href="#">Score</a></li>
                    <li><a href="#">Gameday</a></li>
                    <li><a href="#">Live</a></li>
                </ul>
            </li>
            <li>

                <a href="#">
                    <i class='bx bx-pie-chart-alt-2' ></i>
                    <span class="link_name">Score</span>
                </a>
                <ul class="sub-menu blank">
                    <li><a class="link_name" href="#">Score</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-line-chart' ></i>
                    <span class="link_name">Players</span>
                </a>
                <ul class="sub-menu blank">
                    <li><a class="link_name" href="#">Players</a></li>
                </ul>
            </li>

            <li>
                <div class="icon-link">
                <a href="#">
                    <i class='bx bx-plug' ></i>
                    <span class="link_name">Instruments</span>
                </a>
                <i class='bx bxs-chevron-down arrow' ></i>
                </div>
                <ul class="sub-menu">
                <li><a class="link_name" href="#">Instrumets</a></li>
                <li><a href="#">Guns</a></li>
                <li><a href="#">Rifle</a></li>
                <li><a href="#">Bullets</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-compass' ></i>
                <span class="link_name">Tournament</span>
                </a>
                <ul class="sub-menu blank">
                <li><a class="link_name" href="#">Tournament</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-history'></i>
                <span class="link_name">Again</span>
                </a>
                <ul class="sub-menu blank">
                <li><a class="link_name" href="#">Again</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-cog' ></i>
                <span class="link_name">Setting</span>
                </a>
                <ul class="sub-menu blank">
                <li><a class="link_name" href="#">Setting</a></li>
                </ul>
            </li>
            <li>
                <div class="profile-details">
                    <div class="profile-content">
                    </div>
                    <div class="name-job">
                        <div class="profile_name">Manish</div>
                        <div class="job">Developer</div>
                    </div>
                    <i class='bx bx-log-out' ></i>
                </div>
            </li>
        </ul>
    </div>
    )
}