/* Write your code here! */
(function() {
    
    var announcement = $(".announcement");
    announcement.append($("<button class='announcement-button' type='button' value='X'>Hide Announcement</button>"));
    $('.announcement-button').on('click', function(e) {
        var $this = $(this);
        if($this.parent().hasClass('shows')){
            $this.parent().removeClass('shows');
            $this.html('Show Announcement')
        }
        else {
            $this.parent().addClass('shows');
            $this.html('Hide Announcement')
        }
    });

})();