import {actions, InitialStateType, profileReducer} from "./profile-reducer";

let initialState: InitialStateType = {

    PostsData: [
        {message: "my first post on this page", id: 1, likesCount: 1},
        {message: "my second post on this page", id: 2, likesCount: 3},
        {message: "this is hardcore ", id: 3, likesCount: 3}
    ],
    profile: null,
    status: "123",
}

it("length of new state should be incremented", function () {
    //1.test data
    let action = actions.addPostActionCreator("new post");

    //2. action
    let newState = profileReducer(initialState, action);
    //3. expect result
    expect(newState.PostsData.length).toBe(4)
});

it("message of new post is correct", function () {
    //1.test data
    let action = actions.addPostActionCreator("new post");

    //2. action
    let newState = profileReducer(initialState, action);

    //3. expect result
    expect(newState.PostsData[3].message).toBe("new post")

});
it("length of messages should be decremented", function () {
    //1.test data
    let action = actions.deletePost(1)
    //2. action
    let newState = profileReducer(initialState, action);

    //3. expect result
    expect(newState.PostsData.length).toBe(2)

});
it("length of messages shouldn`t be decremented after delete", function () {
    //1.test data
    let action = actions.deletePost(1000)
    //2. action
    let newState = profileReducer(initialState, action);

    //3. expect result
    expect(newState.PostsData.length).toBe(3)

});

