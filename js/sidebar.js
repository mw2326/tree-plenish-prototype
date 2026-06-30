document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  sidebar.innerHTML = `
    <a class="sidebar-logo" href="index.html">
      <div class="sidebar-logo-icon"><i class="ti ti-trees" aria-hidden="true"></i></div>
      <div>
        <div class="sidebar-logo-text">Tree-Plenish</div>
        <div class="sidebar-logo-sub">Lincoln HS</div>
      </div>
    </a>

    <div class="nav-section-label">Overview</div>
    <a class="nav-item" href="index.html"><i class="ti ti-layout-dashboard" aria-hidden="true"></i> Dashboard</a>
    <a class="nav-item" href="schools.html"><i class="ti ti-building-community" aria-hidden="true"></i> Schools</a>

    <div class="nav-section-label">Manage</div>
    <a class="nav-item" href="events.html"><i class="ti ti-calendar-event" aria-hidden="true"></i> Events</a>
    <a class="nav-item" href="orders.html"><i class="ti ti-package" aria-hidden="true"></i> Orders</a>
    <a class="nav-item" href="volunteers.html"><i class="ti ti-users" aria-hidden="true"></i> Volunteers</a>

    <div class="nav-section-label">Communicate</div>
    <a class="nav-item" href="communications.html">
      <i class="ti ti-mail" aria-hidden="true"></i> Communications
      <span class="nav-badge">3</span>
    </a>
    <a class="nav-item" href="signup.html"><i class="ti ti-forms" aria-hidden="true"></i> Signup Form</a>

    <div class="sidebar-footer">
      <div class="sidebar-avatar">JL</div>
      <div>
        <div class="sidebar-user-name">Jordan Lee</div>
        <div class="sidebar-user-role">Coordinator</div>
      </div>
    </div>
  `;

  const page = window.location.pathname.split('/').pop() || 'index.html';
  sidebar.querySelectorAll('.nav-item').forEach(link => {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });
});
