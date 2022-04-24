const Renderer = function () {
    const renderPosts = function (posts) {
        $("#posts").empty()
        for (let post of posts) {
            let postBox = $("<div class='post' id='" + post.id + "'>" + "<p class=post-text>" + post.text + "</p></div>")
            $("#posts").append(postBox)
            let comment
            for (let i = 0; i < post.comments.length; i++) {
                comment = $("<div class='delete-comment' onclick='removeComment'><div class='comments' id='" + post.comments[i].id + "'>" + "<p class=text>" + post.comments[i].text + "</p></div></div>")
                $("div.post#"+post.id).append(comment)      
            }
            $(".post#"+post.id).append($("<input type='text' placeholder='What do you think?' id='comment-input'><div class='comment' onclick='addComment'>Comment</div><div class='delete' onclick='removePost'>Delete Post</div>"))            
        }
    }
    return {
        renderPosts
    }
}



