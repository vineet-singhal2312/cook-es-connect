const throttle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      flag = false;
      fn.apply(context, args);
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
const reactionFunc = ({ dispatch, dispatchFunc, token, postId, routeName }) => {
  dispatch(dispatchFunc({ token, postId, routeName: routeName }));
};

export const throttleReactionRequest = throttle(reactionFunc, 500);

const uploadPostFunc = ({
  uploadPost,
  selectedImage,
  dispatch,
  token,
  postTitle,
  postCaption,
  setPostTitle,
  setPostCaption,
  setSelectedImage,
}) => {
  uploadPost({
    selectedImage,
    dispatch,
    token,
    postTitle,
    postCaption,
    setPostTitle,
    setPostCaption,
    setSelectedImage,
  });
};

export const throttleUploadPostRequest = throttle(uploadPostFunc, 700);
