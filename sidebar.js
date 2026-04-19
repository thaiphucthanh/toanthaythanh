// sidebar.js
function createSidebar(activePageId) {
    const sidebarHTML = `
    <aside class="w-72 bg-blue-900 text-white flex flex-col shadow-xl z-50">
        <div class="p-6 flex items-center gap-3 border-b border-blue-800">
            <a href="index.html" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src="logo.png" class="w-12 h-12 rounded-full bg-white p-1">
                <div>
                    <div class="font-black text-lg leading-tight text-white">TOÁN</div>
                    <div class="text-xs text-blue-200 uppercase tracking-widest text-[10px]">Thầy Thành Cổng Admin</div>
                </div>
            </a>
        </div>
        <nav class="flex-1 mt-4 overflow-y-auto">
            <a href="index.html" class="sidebar-item ${activePageId === 'welcome' ? 'active-menu' : ''} p-4 flex items-center gap-3">
                <i class="fas fa-home w-5"></i> <span class="font-bold">Trang Welcome</span>
            </a>
            <div class="menu-parent">
                <div class="sidebar-item p-4 flex items-center justify-between" onclick="toggleSubmenu('user-menu')">
                    <div class="flex items-center gap-3">
                        <i class="fas fa-users w-5 text-blue-300"></i> <span class="font-bold">Quản lý người dùng</span>
                    </div>
                    <i class="fas fa-chevron-down text-[10px] arrow-icon"></i>
                </div>
                <div id="user-menu" class="submenu ${['user-list', 'add-user'].includes(activePageId) ? 'show' : ''}">
                    <a href="user-list.html" class="block py-3 pl-12 text-sm hover:text-yellow-400 ${activePageId === 'user-list' ? 'text-yellow-400 border-l-4 border-yellow-400' : ''}">
                        <i class="fas fa-list-ul mr-2 opacity-70"></i> Danh sách người dùng
                    </a>
                    <a href="add-user.html" class="block py-3 pl-12 text-sm hover:text-yellow-400 ${activePageId === 'add-user' ? 'text-yellow-400 border-l-4 border-yellow-400' : ''}">
                        <i class="fas fa-user-plus mr-2 opacity-70"></i> Thêm người dùng mới
                    </a>
                </div>
            </div>
            </nav>
    </aside>`;
    document.getElementById('sidebar-container').innerHTML = sidebarHTML;
}

function toggleSubmenu(id) {
    const menu = document.getElementById(id);
    menu.classList.toggle('show');
}
