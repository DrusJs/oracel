export default function SignInPage() {

    return (
        <main className="main flex flex-col">
            <div className="container container-sm lg:px-8 px-4 md:mt-36 mt-10">
                <div className="flex gap-36">
                    <div className="flex flex-col w-full">
                        <h1 className="title md:text-8xl text-5xl font-head text-white">WELCOME BACK!</h1>
                        <div className="lg:hidden flex my-10 flex-col text-white w-full max-w-xl relative items-end mt-32">
                            <svg className="max-w-full" width="460" height="241" viewBox="0 0 460 241" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="460" height="241" rx="50" fill="white"/>
                                <path d="M58.25 74.9V84H49.25V75L39.65 55.5H48.8L52.6 64.75C53 65.6833 53.3667 66.6667 53.7 67.7H53.8C54.1667 66.5667 54.5333 65.55 54.9 64.65L58.65 55.5H67.75L58.25 74.9ZM81.8395 84.65C76.8728 84.65 73.1395 83.4833 70.6395 81.15C68.1728 78.7833 66.9395 75 66.9395 69.8C66.9395 64.7 68.3061 60.9833 71.0395 58.65C73.7728 56.3167 77.3895 55.15 81.8895 55.15C91.3561 55.15 96.0895 59.8667 96.0895 69.3C96.0895 74.0667 94.9228 77.8167 92.5895 80.55C90.2895 83.2833 86.7061 84.65 81.8395 84.65ZM81.6395 78.75C82.5728 78.75 83.3561 78.6 83.9895 78.3C84.6228 77.9667 85.1228 77.4 85.4895 76.6C86.1895 75.2333 86.5395 73 86.5395 69.9C86.5395 66.8667 86.1895 64.6667 85.4895 63.3C84.7895 61.9 83.5061 61.1667 81.6395 61.1C80.9395 61.1 80.2061 61.1833 79.4395 61.35C78.7061 61.4833 78.2395 61.6833 78.0395 61.95C77.6395 62.4167 77.3228 63.4167 77.0895 64.95C76.8895 66.45 76.7895 68.1 76.7895 69.9C76.7895 72.7 77.0561 74.75 77.5895 76.05C77.9561 77.0167 78.4728 77.7167 79.1395 78.15C79.8061 78.55 80.6395 78.75 81.6395 78.75ZM126.718 55.5V71.45C126.718 74.75 126.352 77.3333 125.618 79.2C124.918 81.0333 123.585 82.3833 121.618 83.25C119.652 84.1167 116.785 84.55 113.018 84.55C110.252 84.55 107.918 84.2667 106.018 83.7C104.118 83.1 102.602 81.9833 101.468 80.35C100.368 78.7167 99.8184 76.4167 99.8184 73.45V55.5H108.818V71.55C108.818 73.3167 108.902 74.6667 109.068 75.6C109.268 76.5 109.702 77.2 110.368 77.7C111.035 78.1667 112.052 78.4 113.418 78.4C114.252 78.4 115.035 78.3167 115.768 78.15C116.502 77.9833 117.002 77.7333 117.268 77.4C117.568 77 117.718 75.55 117.718 73.05V55.5H126.718ZM147.334 72.5V84H138.984V55.5H147.434L154.984 67C156.118 68.7 156.984 70.1333 157.584 71.3H157.734V66.5V55.5H166.034V84H157.534L149.784 72L147.534 68.6H147.384L147.334 72.5ZM170.717 55.5H191.467V61.5H179.717V66.7H189.617V72.1H179.717V77.9H191.417V84H170.717V55.5ZM211.783 55.5H221.283L213.583 84H200.533L192.783 55.5H202.333L206.933 77.8H207.183L211.783 55.5ZM223.549 55.5H244.299V61.5H232.549V66.7H242.449V72.1H232.549V77.9H244.249V84H223.549V55.5ZM274.065 84H264.615L262.915 76.8C262.849 76.5333 262.732 76.0833 262.565 75.45C262.432 74.7833 262.265 74.3 262.065 74C261.865 73.6667 261.582 73.45 261.215 73.35C260.282 73.3833 258.915 73.4 257.115 73.4V84H248.115V55.75C252.149 55.45 255.915 55.3 259.415 55.3C262.582 55.3 265.149 55.5667 267.115 56.1C269.082 56.6 270.549 57.4833 271.515 58.75C272.515 59.9833 273.015 61.6833 273.015 63.85C273.015 65.8833 272.549 67.4833 271.615 68.65C270.682 69.7833 269.182 70.4667 267.115 70.7V71C268.282 71.1 269.249 71.4833 270.015 72.15C270.815 72.7833 271.349 73.6 271.615 74.6L274.065 84ZM257.115 67.75C257.415 67.7833 257.999 67.8 258.865 67.8C261.432 67.8 262.932 67.5833 263.365 67.15C263.765 66.75 263.965 65.8167 263.965 64.35C263.965 62.9833 263.599 62.05 262.865 61.55C262.165 61.05 260.999 60.8 259.365 60.8C258.999 60.8 258.249 60.8333 257.115 60.9V67.75ZM57.45 137H48.45V114.75H40.4V108.5H65.5V114.75H57.45V137ZM68.4289 108.5H77.4789V118.95H85.2289V108.5H94.2789V137H85.2289V124.7H77.4789V137H68.4289V108.5ZM125.286 137H115.836L114.136 129.8C114.069 129.533 113.953 129.083 113.786 128.45C113.653 127.783 113.486 127.3 113.286 127C113.086 126.667 112.803 126.45 112.436 126.35C111.503 126.383 110.136 126.4 108.336 126.4V137H99.3359V108.75C103.369 108.45 107.136 108.3 110.636 108.3C113.803 108.3 116.369 108.567 118.336 109.1C120.303 109.6 121.769 110.483 122.736 111.75C123.736 112.983 124.236 114.683 124.236 116.85C124.236 118.883 123.769 120.483 122.836 121.65C121.903 122.783 120.403 123.467 118.336 123.7V124C119.503 124.1 120.469 124.483 121.236 125.15C122.036 125.783 122.569 126.6 122.836 127.6L125.286 137ZM108.336 120.75C108.636 120.783 109.219 120.8 110.086 120.8C112.653 120.8 114.153 120.583 114.586 120.15C114.986 119.75 115.186 118.817 115.186 117.35C115.186 115.983 114.819 115.05 114.086 114.55C113.386 114.05 112.219 113.8 110.586 113.8C110.219 113.8 109.469 113.833 108.336 113.9V120.75ZM142.24 137.65C137.273 137.65 133.54 136.483 131.04 134.15C128.573 131.783 127.34 128 127.34 122.8C127.34 117.7 128.707 113.983 131.44 111.65C134.173 109.317 137.79 108.15 142.29 108.15C151.757 108.15 156.49 112.867 156.49 122.3C156.49 127.067 155.323 130.817 152.99 133.55C150.69 136.283 147.107 137.65 142.24 137.65ZM142.04 131.75C142.973 131.75 143.757 131.6 144.39 131.3C145.023 130.967 145.523 130.4 145.89 129.6C146.59 128.233 146.94 126 146.94 122.9C146.94 119.867 146.59 117.667 145.89 116.3C145.19 114.9 143.907 114.167 142.04 114.1C141.34 114.1 140.607 114.183 139.84 114.35C139.107 114.483 138.64 114.683 138.44 114.95C138.04 115.417 137.723 116.417 137.49 117.95C137.29 119.45 137.19 121.1 137.19 122.9C137.19 125.7 137.457 127.75 137.99 129.05C138.357 130.017 138.873 130.717 139.54 131.15C140.207 131.55 141.04 131.75 142.04 131.75ZM177.269 137H166.019L158.669 108.5H168.269L172.069 129.45H172.319L176.369 108.5H185.769L189.919 129.45H190.069L193.919 108.5H203.119L195.769 137H184.569L181.169 118.8H180.869L177.269 137ZM228.788 137H219.788V114.75H211.738V108.5H236.838V114.75H228.788V137ZM239.767 108.5H248.817V118.95H256.567V108.5H265.617V137H256.567V124.7H248.817V137H239.767V108.5ZM270.424 108.5H291.174V114.5H279.424V119.7H289.324V125.1H279.424V130.9H291.124V137H270.424V108.5ZM312.51 108.5C316.41 108.5 319.593 108.867 322.06 109.6C324.56 110.333 326.493 111.717 327.86 113.75C329.26 115.783 329.96 118.7 329.96 122.5C329.96 126.567 329.226 129.667 327.76 131.8C326.293 133.9 324.326 135.3 321.86 136C319.393 136.667 316.276 137 312.51 137H302.51V108.5H312.51ZM319.21 130.2C319.61 129.8 319.893 128.767 320.06 127.1C320.226 125.433 320.31 123.9 320.31 122.5C320.31 120.733 320.176 119.333 319.91 118.3C319.676 117.233 319.243 116.383 318.61 115.75C317.61 114.65 315.893 114.1 313.46 114.1C313.026 114.1 312.376 114.133 311.51 114.2V130.8C312.076 130.867 312.96 130.9 314.16 130.9C315.393 130.9 316.476 130.85 317.41 130.75C318.376 130.617 318.976 130.433 319.21 130.2ZM334.005 108.5H343.005V137H334.005V108.5ZM370.416 136.05C369.183 136.583 367.75 136.967 366.116 137.2C364.483 137.433 362.966 137.55 361.566 137.55C357.033 137.55 353.483 136.367 350.916 134C348.35 131.633 347.066 128 347.066 123.1C347.066 118.1 348.416 114.367 351.116 111.9C353.816 109.4 357.616 108.15 362.516 108.15C364.85 108.15 367.283 108.467 369.816 109.1C369.816 109.767 369.75 110.767 369.616 112.1C369.483 113.4 369.35 114.317 369.216 114.85H366.066C363.766 114.85 361.95 114.9 360.616 115C359.316 115.067 358.533 115.217 358.266 115.45C357.766 115.917 357.383 116.867 357.116 118.3C356.85 119.7 356.716 121.05 356.716 122.35C356.716 124.617 357 126.367 357.566 127.6C358.133 128.8 358.85 129.6 359.716 130C360.55 130.4 361.933 130.6 363.866 130.6C365.4 130.6 367.4 130.467 369.866 130.2L370.416 136.05ZM373.451 108.5H394.201V114.5H382.451V119.7H392.351V125.1H382.451V130.9H394.151V137H373.451V108.5Z" fill="#2D2D32"/>
                                <path d="M45.985 193C45.94 191.425 45.8875 189.737 45.8275 187.937C45.7825 186.137 45.7375 184.45 45.6925 182.875L45.4 172.817C45.34 171.002 45.28 169.037 45.22 166.922C45.16 164.807 45.1 162.805 45.04 160.915H57.37C57.205 162.52 57.0325 164.2 56.8525 165.955C56.6725 167.695 56.5 169.39 56.335 171.04L55.435 179.86H56.155L59.215 170.86C59.56 169.84 59.9275 168.76 60.3175 167.62C60.7075 166.48 61.0975 165.34 61.4875 164.2C61.8775 163.045 62.245 161.95 62.59 160.915H73.975C73.87 162.52 73.7575 164.2 73.6375 165.955C73.5175 167.695 73.3975 169.375 73.2775 170.995L72.67 179.86H73.39L76.2025 170.882C76.6975 169.307 77.215 167.65 77.755 165.91C78.31 164.155 78.835 162.49 79.33 160.915H92.11C91.255 162.805 90.3475 164.815 89.3875 166.945C88.4275 169.06 87.55 170.987 86.755 172.727L82.165 182.875C81.445 184.465 80.6725 186.167 79.8475 187.982C79.0375 189.782 78.28 191.455 77.575 193H64.255C64.315 191.665 64.375 190.255 64.435 188.77C64.51 187.27 64.5775 185.86 64.6375 184.54L64.975 176.89H64.255L61.4875 184.562C61.0225 185.837 60.52 187.232 59.98 188.747C59.44 190.262 58.93 191.68 58.45 193H45.985ZM88.2927 193C88.6527 191.335 88.9977 189.722 89.3277 188.162C89.6577 186.602 90.0477 184.772 90.4977 182.672L92.8377 171.67C93.3027 169.525 93.7077 167.635 94.0527 166C94.3977 164.365 94.7577 162.67 95.1327 160.915H106.428C106.053 162.655 105.685 164.357 105.325 166.022C104.98 167.672 104.583 169.555 104.133 171.67L101.793 182.672C101.343 184.772 100.953 186.602 100.623 188.162C100.293 189.722 99.9477 191.335 99.5877 193H88.2927ZM110.997 193C111.357 191.335 111.702 189.722 112.032 188.162C112.362 186.602 112.752 184.772 113.202 182.672L115.159 173.47C115.624 171.31 116.029 169.412 116.374 167.777C116.719 166.127 117.079 164.44 117.454 162.715L119.952 170.455H115.227C113.652 170.455 112.257 170.455 111.042 170.455C109.842 170.455 108.702 170.455 107.622 170.455L109.602 160.915H137.097L135.072 170.455C133.992 170.455 132.852 170.455 131.652 170.455C130.467 170.455 129.087 170.455 127.512 170.455H122.787L128.479 162.715C128.104 164.44 127.744 166.127 127.399 167.777C127.054 169.412 126.649 171.31 126.184 173.47L124.227 182.672C123.777 184.772 123.387 186.602 123.057 188.162C122.727 189.722 122.382 191.335 122.022 193H110.997ZM151.829 193C152.174 191.35 152.511 189.745 152.841 188.185C153.186 186.61 153.584 184.765 154.034 182.65L156.374 171.67C156.824 169.555 157.221 167.68 157.566 166.045C157.926 164.41 158.294 162.7 158.669 160.915H169.784C169.409 162.685 169.041 164.387 168.681 166.022C168.336 167.657 167.939 169.54 167.489 171.67L165.149 182.672C164.699 184.772 164.309 186.602 163.979 188.162C163.649 189.707 163.304 191.32 162.944 193H151.829ZM133.244 193C133.604 191.305 133.949 189.685 134.279 188.14C134.609 186.595 134.999 184.765 135.449 182.65L137.789 171.67C138.239 169.555 138.636 167.68 138.981 166.045C139.341 164.41 139.709 162.7 140.084 160.915H151.199C150.824 162.655 150.456 164.357 150.096 166.022C149.751 167.672 149.354 169.555 148.904 171.67L146.564 182.65C146.114 184.78 145.724 186.617 145.394 188.162C145.064 189.707 144.719 191.32 144.359 193H133.244ZM144.089 181.48L146.024 172.39H159.074L157.139 181.48H144.089ZM190.817 193.72C187.247 193.72 184.449 193.075 182.424 191.785C180.414 190.48 179.094 188.71 178.464 186.475C177.849 184.24 177.842 181.72 178.442 178.915C178.547 178.42 178.682 177.79 178.847 177.025C179.012 176.245 179.192 175.397 179.387 174.482C179.597 173.552 179.799 172.622 179.994 171.692C180.459 169.547 180.864 167.657 181.209 166.022C181.569 164.387 181.937 162.685 182.312 160.915H193.337C192.962 162.67 192.602 164.365 192.257 166C191.912 167.62 191.514 169.495 191.064 171.625L189.422 179.365C189.197 180.46 189.122 181.42 189.197 182.245C189.287 183.055 189.534 183.685 189.939 184.135C190.359 184.585 190.937 184.81 191.672 184.81C192.467 184.81 193.149 184.63 193.719 184.27C194.289 183.895 194.762 183.355 195.137 182.65C195.527 181.93 195.827 181.06 196.037 180.04L197.792 171.715C198.242 169.6 198.639 167.71 198.984 166.045C199.344 164.365 199.712 162.655 200.087 160.915H211.112C210.752 162.64 210.399 164.327 210.054 165.977C209.709 167.627 209.312 169.525 208.862 171.67C208.607 172.915 208.337 174.197 208.052 175.517C207.782 176.822 207.534 178.015 207.309 179.095C207.084 180.175 206.912 181 206.792 181.57C206.282 183.97 205.457 186.085 204.317 187.915C203.192 189.73 201.549 191.155 199.389 192.19C197.244 193.21 194.387 193.72 190.817 193.72ZM221.083 193.72C219.463 193.72 217.813 193.6 216.133 193.36C214.453 193.12 212.916 192.797 211.521 192.392C210.126 191.972 209.053 191.515 208.303 191.02L210.868 181.93C211.828 182.59 212.863 183.167 213.973 183.662C215.083 184.142 216.201 184.517 217.326 184.787C218.466 185.042 219.553 185.17 220.588 185.17C221.263 185.17 221.796 185.11 222.186 184.99C222.591 184.87 222.891 184.697 223.086 184.472C223.296 184.232 223.438 183.94 223.513 183.595C223.603 183.175 223.476 182.777 223.131 182.402C222.801 182.012 222.283 181.637 221.578 181.277C220.888 180.902 220.048 180.52 219.058 180.13C217.393 179.47 215.976 178.69 214.806 177.79C213.651 176.875 212.841 175.72 212.376 174.325C211.926 172.93 211.918 171.175 212.353 169.06C212.758 167.095 213.448 165.46 214.423 164.155C215.413 162.835 216.771 161.845 218.496 161.185C220.221 160.525 222.403 160.195 225.043 160.195C226.213 160.195 227.398 160.27 228.598 160.42C229.813 160.57 230.991 160.78 232.131 161.05C233.286 161.305 234.351 161.612 235.326 161.972C236.301 162.317 237.133 162.7 237.823 163.12L235.168 171.85C234.283 171.19 233.278 170.642 232.153 170.207C231.043 169.772 229.978 169.45 228.958 169.24C227.953 169.03 227.158 168.925 226.573 168.925C226.063 168.925 225.606 168.977 225.201 169.082C224.811 169.187 224.488 169.353 224.233 169.577C223.978 169.802 223.813 170.095 223.738 170.455C223.663 170.83 223.738 171.205 223.963 171.58C224.188 171.955 224.578 172.337 225.133 172.727C225.703 173.102 226.468 173.485 227.428 173.875C229.648 174.76 231.366 175.697 232.581 176.687C233.796 177.677 234.583 178.81 234.943 180.085C235.303 181.345 235.303 182.83 234.943 184.54C234.478 186.76 233.713 188.545 232.648 189.895C231.583 191.23 230.113 192.205 228.238 192.82C226.363 193.42 223.978 193.72 221.083 193.72Z" fill="#373BC1"/>
                            </svg>
                            <img src="img/dice1.png" alt="Dice sign in" className="absolute -z-10 left-4 -top-1/3 w-[140px]"/>
                            <img src="img/dice2.png" alt="Dice sign in" className="absolute z-10 -right-0 -top-1/3 w-[140px]"/>
                            <img src="img/dice3.png" alt="Dice sign in" className="absolute -z-10 -left-10 top-1/2 w-[180px]"/>
                        </div>
                        <form className="flex flex-col w-full lg:max-w-2xl mt-12">
                            <input type="email" name="email-input" id="email-input" className="outline-transparent w-full font-display md:text-[22px] text-base text-white py-6 md:px-10 px-6 bg-input rounded-full mb-6" placeholder="What’s your e-mail?" />
                            <input type="text" name="topic-input" id="topic-input" className="outline-transparent w-full font-display md:text-[22px] text-base text-white py-6 md:px-10 px-6 bg-input rounded-full mb-6" placeholder="What’s the topic?" />
                            <button className="w-full bg-green text-dark md:text-2xl text-lg font-display md:py-10 py-6 mt-14 flex items-center justify-center font-bold rounded-full gap-6 uppercase">
                                SIGN IN
                                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3218 1.1549C12.9727 0.50403 14.028 0.50403 14.6788 1.1549L26.3455 12.8216C26.9964 13.4724 26.9964 14.5277 26.3455 15.1786L14.6788 26.8453C14.028 27.4961 12.9727 27.4961 12.3218 26.8453C11.6709 26.1944 11.6709 25.1391 12.3218 24.4882L21.1433 15.6667H1.83366C0.913184 15.6667 0.166992 14.9206 0.166992 14.0001C0.166992 13.0796 0.913184 12.3334 1.83366 12.3334H21.1433L12.3218 3.51193C11.6709 2.86105 11.6709 1.80578 12.3218 1.1549Z" fill="#1C1B23"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="lg:flex hidden flex-col text-white w-full max-w-xl relative items-end mt-32">
                        <svg width="460" height="241" viewBox="0 0 460 241" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="460" height="241" rx="50" fill="white"/>
                            <path d="M58.25 74.9V84H49.25V75L39.65 55.5H48.8L52.6 64.75C53 65.6833 53.3667 66.6667 53.7 67.7H53.8C54.1667 66.5667 54.5333 65.55 54.9 64.65L58.65 55.5H67.75L58.25 74.9ZM81.8395 84.65C76.8728 84.65 73.1395 83.4833 70.6395 81.15C68.1728 78.7833 66.9395 75 66.9395 69.8C66.9395 64.7 68.3061 60.9833 71.0395 58.65C73.7728 56.3167 77.3895 55.15 81.8895 55.15C91.3561 55.15 96.0895 59.8667 96.0895 69.3C96.0895 74.0667 94.9228 77.8167 92.5895 80.55C90.2895 83.2833 86.7061 84.65 81.8395 84.65ZM81.6395 78.75C82.5728 78.75 83.3561 78.6 83.9895 78.3C84.6228 77.9667 85.1228 77.4 85.4895 76.6C86.1895 75.2333 86.5395 73 86.5395 69.9C86.5395 66.8667 86.1895 64.6667 85.4895 63.3C84.7895 61.9 83.5061 61.1667 81.6395 61.1C80.9395 61.1 80.2061 61.1833 79.4395 61.35C78.7061 61.4833 78.2395 61.6833 78.0395 61.95C77.6395 62.4167 77.3228 63.4167 77.0895 64.95C76.8895 66.45 76.7895 68.1 76.7895 69.9C76.7895 72.7 77.0561 74.75 77.5895 76.05C77.9561 77.0167 78.4728 77.7167 79.1395 78.15C79.8061 78.55 80.6395 78.75 81.6395 78.75ZM126.718 55.5V71.45C126.718 74.75 126.352 77.3333 125.618 79.2C124.918 81.0333 123.585 82.3833 121.618 83.25C119.652 84.1167 116.785 84.55 113.018 84.55C110.252 84.55 107.918 84.2667 106.018 83.7C104.118 83.1 102.602 81.9833 101.468 80.35C100.368 78.7167 99.8184 76.4167 99.8184 73.45V55.5H108.818V71.55C108.818 73.3167 108.902 74.6667 109.068 75.6C109.268 76.5 109.702 77.2 110.368 77.7C111.035 78.1667 112.052 78.4 113.418 78.4C114.252 78.4 115.035 78.3167 115.768 78.15C116.502 77.9833 117.002 77.7333 117.268 77.4C117.568 77 117.718 75.55 117.718 73.05V55.5H126.718ZM147.334 72.5V84H138.984V55.5H147.434L154.984 67C156.118 68.7 156.984 70.1333 157.584 71.3H157.734V66.5V55.5H166.034V84H157.534L149.784 72L147.534 68.6H147.384L147.334 72.5ZM170.717 55.5H191.467V61.5H179.717V66.7H189.617V72.1H179.717V77.9H191.417V84H170.717V55.5ZM211.783 55.5H221.283L213.583 84H200.533L192.783 55.5H202.333L206.933 77.8H207.183L211.783 55.5ZM223.549 55.5H244.299V61.5H232.549V66.7H242.449V72.1H232.549V77.9H244.249V84H223.549V55.5ZM274.065 84H264.615L262.915 76.8C262.849 76.5333 262.732 76.0833 262.565 75.45C262.432 74.7833 262.265 74.3 262.065 74C261.865 73.6667 261.582 73.45 261.215 73.35C260.282 73.3833 258.915 73.4 257.115 73.4V84H248.115V55.75C252.149 55.45 255.915 55.3 259.415 55.3C262.582 55.3 265.149 55.5667 267.115 56.1C269.082 56.6 270.549 57.4833 271.515 58.75C272.515 59.9833 273.015 61.6833 273.015 63.85C273.015 65.8833 272.549 67.4833 271.615 68.65C270.682 69.7833 269.182 70.4667 267.115 70.7V71C268.282 71.1 269.249 71.4833 270.015 72.15C270.815 72.7833 271.349 73.6 271.615 74.6L274.065 84ZM257.115 67.75C257.415 67.7833 257.999 67.8 258.865 67.8C261.432 67.8 262.932 67.5833 263.365 67.15C263.765 66.75 263.965 65.8167 263.965 64.35C263.965 62.9833 263.599 62.05 262.865 61.55C262.165 61.05 260.999 60.8 259.365 60.8C258.999 60.8 258.249 60.8333 257.115 60.9V67.75ZM57.45 137H48.45V114.75H40.4V108.5H65.5V114.75H57.45V137ZM68.4289 108.5H77.4789V118.95H85.2289V108.5H94.2789V137H85.2289V124.7H77.4789V137H68.4289V108.5ZM125.286 137H115.836L114.136 129.8C114.069 129.533 113.953 129.083 113.786 128.45C113.653 127.783 113.486 127.3 113.286 127C113.086 126.667 112.803 126.45 112.436 126.35C111.503 126.383 110.136 126.4 108.336 126.4V137H99.3359V108.75C103.369 108.45 107.136 108.3 110.636 108.3C113.803 108.3 116.369 108.567 118.336 109.1C120.303 109.6 121.769 110.483 122.736 111.75C123.736 112.983 124.236 114.683 124.236 116.85C124.236 118.883 123.769 120.483 122.836 121.65C121.903 122.783 120.403 123.467 118.336 123.7V124C119.503 124.1 120.469 124.483 121.236 125.15C122.036 125.783 122.569 126.6 122.836 127.6L125.286 137ZM108.336 120.75C108.636 120.783 109.219 120.8 110.086 120.8C112.653 120.8 114.153 120.583 114.586 120.15C114.986 119.75 115.186 118.817 115.186 117.35C115.186 115.983 114.819 115.05 114.086 114.55C113.386 114.05 112.219 113.8 110.586 113.8C110.219 113.8 109.469 113.833 108.336 113.9V120.75ZM142.24 137.65C137.273 137.65 133.54 136.483 131.04 134.15C128.573 131.783 127.34 128 127.34 122.8C127.34 117.7 128.707 113.983 131.44 111.65C134.173 109.317 137.79 108.15 142.29 108.15C151.757 108.15 156.49 112.867 156.49 122.3C156.49 127.067 155.323 130.817 152.99 133.55C150.69 136.283 147.107 137.65 142.24 137.65ZM142.04 131.75C142.973 131.75 143.757 131.6 144.39 131.3C145.023 130.967 145.523 130.4 145.89 129.6C146.59 128.233 146.94 126 146.94 122.9C146.94 119.867 146.59 117.667 145.89 116.3C145.19 114.9 143.907 114.167 142.04 114.1C141.34 114.1 140.607 114.183 139.84 114.35C139.107 114.483 138.64 114.683 138.44 114.95C138.04 115.417 137.723 116.417 137.49 117.95C137.29 119.45 137.19 121.1 137.19 122.9C137.19 125.7 137.457 127.75 137.99 129.05C138.357 130.017 138.873 130.717 139.54 131.15C140.207 131.55 141.04 131.75 142.04 131.75ZM177.269 137H166.019L158.669 108.5H168.269L172.069 129.45H172.319L176.369 108.5H185.769L189.919 129.45H190.069L193.919 108.5H203.119L195.769 137H184.569L181.169 118.8H180.869L177.269 137ZM228.788 137H219.788V114.75H211.738V108.5H236.838V114.75H228.788V137ZM239.767 108.5H248.817V118.95H256.567V108.5H265.617V137H256.567V124.7H248.817V137H239.767V108.5ZM270.424 108.5H291.174V114.5H279.424V119.7H289.324V125.1H279.424V130.9H291.124V137H270.424V108.5ZM312.51 108.5C316.41 108.5 319.593 108.867 322.06 109.6C324.56 110.333 326.493 111.717 327.86 113.75C329.26 115.783 329.96 118.7 329.96 122.5C329.96 126.567 329.226 129.667 327.76 131.8C326.293 133.9 324.326 135.3 321.86 136C319.393 136.667 316.276 137 312.51 137H302.51V108.5H312.51ZM319.21 130.2C319.61 129.8 319.893 128.767 320.06 127.1C320.226 125.433 320.31 123.9 320.31 122.5C320.31 120.733 320.176 119.333 319.91 118.3C319.676 117.233 319.243 116.383 318.61 115.75C317.61 114.65 315.893 114.1 313.46 114.1C313.026 114.1 312.376 114.133 311.51 114.2V130.8C312.076 130.867 312.96 130.9 314.16 130.9C315.393 130.9 316.476 130.85 317.41 130.75C318.376 130.617 318.976 130.433 319.21 130.2ZM334.005 108.5H343.005V137H334.005V108.5ZM370.416 136.05C369.183 136.583 367.75 136.967 366.116 137.2C364.483 137.433 362.966 137.55 361.566 137.55C357.033 137.55 353.483 136.367 350.916 134C348.35 131.633 347.066 128 347.066 123.1C347.066 118.1 348.416 114.367 351.116 111.9C353.816 109.4 357.616 108.15 362.516 108.15C364.85 108.15 367.283 108.467 369.816 109.1C369.816 109.767 369.75 110.767 369.616 112.1C369.483 113.4 369.35 114.317 369.216 114.85H366.066C363.766 114.85 361.95 114.9 360.616 115C359.316 115.067 358.533 115.217 358.266 115.45C357.766 115.917 357.383 116.867 357.116 118.3C356.85 119.7 356.716 121.05 356.716 122.35C356.716 124.617 357 126.367 357.566 127.6C358.133 128.8 358.85 129.6 359.716 130C360.55 130.4 361.933 130.6 363.866 130.6C365.4 130.6 367.4 130.467 369.866 130.2L370.416 136.05ZM373.451 108.5H394.201V114.5H382.451V119.7H392.351V125.1H382.451V130.9H394.151V137H373.451V108.5Z" fill="#2D2D32"/>
                            <path d="M45.985 193C45.94 191.425 45.8875 189.737 45.8275 187.937C45.7825 186.137 45.7375 184.45 45.6925 182.875L45.4 172.817C45.34 171.002 45.28 169.037 45.22 166.922C45.16 164.807 45.1 162.805 45.04 160.915H57.37C57.205 162.52 57.0325 164.2 56.8525 165.955C56.6725 167.695 56.5 169.39 56.335 171.04L55.435 179.86H56.155L59.215 170.86C59.56 169.84 59.9275 168.76 60.3175 167.62C60.7075 166.48 61.0975 165.34 61.4875 164.2C61.8775 163.045 62.245 161.95 62.59 160.915H73.975C73.87 162.52 73.7575 164.2 73.6375 165.955C73.5175 167.695 73.3975 169.375 73.2775 170.995L72.67 179.86H73.39L76.2025 170.882C76.6975 169.307 77.215 167.65 77.755 165.91C78.31 164.155 78.835 162.49 79.33 160.915H92.11C91.255 162.805 90.3475 164.815 89.3875 166.945C88.4275 169.06 87.55 170.987 86.755 172.727L82.165 182.875C81.445 184.465 80.6725 186.167 79.8475 187.982C79.0375 189.782 78.28 191.455 77.575 193H64.255C64.315 191.665 64.375 190.255 64.435 188.77C64.51 187.27 64.5775 185.86 64.6375 184.54L64.975 176.89H64.255L61.4875 184.562C61.0225 185.837 60.52 187.232 59.98 188.747C59.44 190.262 58.93 191.68 58.45 193H45.985ZM88.2927 193C88.6527 191.335 88.9977 189.722 89.3277 188.162C89.6577 186.602 90.0477 184.772 90.4977 182.672L92.8377 171.67C93.3027 169.525 93.7077 167.635 94.0527 166C94.3977 164.365 94.7577 162.67 95.1327 160.915H106.428C106.053 162.655 105.685 164.357 105.325 166.022C104.98 167.672 104.583 169.555 104.133 171.67L101.793 182.672C101.343 184.772 100.953 186.602 100.623 188.162C100.293 189.722 99.9477 191.335 99.5877 193H88.2927ZM110.997 193C111.357 191.335 111.702 189.722 112.032 188.162C112.362 186.602 112.752 184.772 113.202 182.672L115.159 173.47C115.624 171.31 116.029 169.412 116.374 167.777C116.719 166.127 117.079 164.44 117.454 162.715L119.952 170.455H115.227C113.652 170.455 112.257 170.455 111.042 170.455C109.842 170.455 108.702 170.455 107.622 170.455L109.602 160.915H137.097L135.072 170.455C133.992 170.455 132.852 170.455 131.652 170.455C130.467 170.455 129.087 170.455 127.512 170.455H122.787L128.479 162.715C128.104 164.44 127.744 166.127 127.399 167.777C127.054 169.412 126.649 171.31 126.184 173.47L124.227 182.672C123.777 184.772 123.387 186.602 123.057 188.162C122.727 189.722 122.382 191.335 122.022 193H110.997ZM151.829 193C152.174 191.35 152.511 189.745 152.841 188.185C153.186 186.61 153.584 184.765 154.034 182.65L156.374 171.67C156.824 169.555 157.221 167.68 157.566 166.045C157.926 164.41 158.294 162.7 158.669 160.915H169.784C169.409 162.685 169.041 164.387 168.681 166.022C168.336 167.657 167.939 169.54 167.489 171.67L165.149 182.672C164.699 184.772 164.309 186.602 163.979 188.162C163.649 189.707 163.304 191.32 162.944 193H151.829ZM133.244 193C133.604 191.305 133.949 189.685 134.279 188.14C134.609 186.595 134.999 184.765 135.449 182.65L137.789 171.67C138.239 169.555 138.636 167.68 138.981 166.045C139.341 164.41 139.709 162.7 140.084 160.915H151.199C150.824 162.655 150.456 164.357 150.096 166.022C149.751 167.672 149.354 169.555 148.904 171.67L146.564 182.65C146.114 184.78 145.724 186.617 145.394 188.162C145.064 189.707 144.719 191.32 144.359 193H133.244ZM144.089 181.48L146.024 172.39H159.074L157.139 181.48H144.089ZM190.817 193.72C187.247 193.72 184.449 193.075 182.424 191.785C180.414 190.48 179.094 188.71 178.464 186.475C177.849 184.24 177.842 181.72 178.442 178.915C178.547 178.42 178.682 177.79 178.847 177.025C179.012 176.245 179.192 175.397 179.387 174.482C179.597 173.552 179.799 172.622 179.994 171.692C180.459 169.547 180.864 167.657 181.209 166.022C181.569 164.387 181.937 162.685 182.312 160.915H193.337C192.962 162.67 192.602 164.365 192.257 166C191.912 167.62 191.514 169.495 191.064 171.625L189.422 179.365C189.197 180.46 189.122 181.42 189.197 182.245C189.287 183.055 189.534 183.685 189.939 184.135C190.359 184.585 190.937 184.81 191.672 184.81C192.467 184.81 193.149 184.63 193.719 184.27C194.289 183.895 194.762 183.355 195.137 182.65C195.527 181.93 195.827 181.06 196.037 180.04L197.792 171.715C198.242 169.6 198.639 167.71 198.984 166.045C199.344 164.365 199.712 162.655 200.087 160.915H211.112C210.752 162.64 210.399 164.327 210.054 165.977C209.709 167.627 209.312 169.525 208.862 171.67C208.607 172.915 208.337 174.197 208.052 175.517C207.782 176.822 207.534 178.015 207.309 179.095C207.084 180.175 206.912 181 206.792 181.57C206.282 183.97 205.457 186.085 204.317 187.915C203.192 189.73 201.549 191.155 199.389 192.19C197.244 193.21 194.387 193.72 190.817 193.72ZM221.083 193.72C219.463 193.72 217.813 193.6 216.133 193.36C214.453 193.12 212.916 192.797 211.521 192.392C210.126 191.972 209.053 191.515 208.303 191.02L210.868 181.93C211.828 182.59 212.863 183.167 213.973 183.662C215.083 184.142 216.201 184.517 217.326 184.787C218.466 185.042 219.553 185.17 220.588 185.17C221.263 185.17 221.796 185.11 222.186 184.99C222.591 184.87 222.891 184.697 223.086 184.472C223.296 184.232 223.438 183.94 223.513 183.595C223.603 183.175 223.476 182.777 223.131 182.402C222.801 182.012 222.283 181.637 221.578 181.277C220.888 180.902 220.048 180.52 219.058 180.13C217.393 179.47 215.976 178.69 214.806 177.79C213.651 176.875 212.841 175.72 212.376 174.325C211.926 172.93 211.918 171.175 212.353 169.06C212.758 167.095 213.448 165.46 214.423 164.155C215.413 162.835 216.771 161.845 218.496 161.185C220.221 160.525 222.403 160.195 225.043 160.195C226.213 160.195 227.398 160.27 228.598 160.42C229.813 160.57 230.991 160.78 232.131 161.05C233.286 161.305 234.351 161.612 235.326 161.972C236.301 162.317 237.133 162.7 237.823 163.12L235.168 171.85C234.283 171.19 233.278 170.642 232.153 170.207C231.043 169.772 229.978 169.45 228.958 169.24C227.953 169.03 227.158 168.925 226.573 168.925C226.063 168.925 225.606 168.977 225.201 169.082C224.811 169.187 224.488 169.353 224.233 169.577C223.978 169.802 223.813 170.095 223.738 170.455C223.663 170.83 223.738 171.205 223.963 171.58C224.188 171.955 224.578 172.337 225.133 172.727C225.703 173.102 226.468 173.485 227.428 173.875C229.648 174.76 231.366 175.697 232.581 176.687C233.796 177.677 234.583 178.81 234.943 180.085C235.303 181.345 235.303 182.83 234.943 184.54C234.478 186.76 233.713 188.545 232.648 189.895C231.583 191.23 230.113 192.205 228.238 192.82C226.363 193.42 223.978 193.72 221.083 193.72Z" fill="#373BC1"/>
                        </svg>
                        <img src="img/dice1.png" alt="Dice sign in" className="absolute -z-10 -left-32 -top-1/3"/>
                        <img src="img/dice2.png" alt="Dice sign in" className="absolute z-10 -right-32 -top-1/2"/>
                        <img src="img/dice3.png" alt="Dice sign in" className="absolute -z-10 -left-10 top-1/4"/>
                    </div>
                </div>
            </div>        
        </main>
    );
}
