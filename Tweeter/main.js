const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$("#post").on("click", function () {
    const inputValue = $("input").val()
    tweeter.addPost(inputValue);
    renderer.renderPosts(tweeter.getPosts())
    $("input").val("")
})

$("#posts").on("click",".delete", function () {
    let relevantId = $(this).closest(".post").attr("id")
    tweeter.removePost(relevantId)
    renderer.renderPosts(tweeter.getPosts())
})
$("#posts").on("click",".comment", function () {
    let relevantId = $(this).closest(".post").attr("id")
    let relevantInputValue = $(this).closest(".post").find("input").val()
    tweeter.addComment(relevantInputValue,relevantId)
    renderer.renderPosts(tweeter.getPosts())
})
$("#posts").on("click",".delete-comment",function () {
    let postId = $(this).closest(".post").attr("id")
    let commentId = $(this).closest(".delete-comment").find("div").attr("id")
    tweeter.removeComment(postId,commentId)
    renderer.renderPosts(tweeter.getPosts())
})


