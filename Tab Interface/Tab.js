document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
  
    // Function to handle tab switch
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const targetTab = this.dataset.tab;
  
        // Remove 'active' class from all tabs and tab panes
        tabs.forEach(t => t.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
  
        // Add 'active' class to the clicked tab and corresponding tab pane
        this.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
      });
    });
  });
  