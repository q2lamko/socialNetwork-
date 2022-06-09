import React from "react";
import {PostType} from "../../Redux/profile-reducer";


type PropsType = PostType;

const Post: React.FC<PropsType> = (props) => {

    return (
        <div >
            <div>
                {props.message}
            </div>

            <div>
                <span >like</span>
                <div>{props.likesCount}</div>
            </div>
        </div>
    )
}

export default Post;
