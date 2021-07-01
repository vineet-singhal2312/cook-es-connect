const debounce = (func) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 500);
  };
};

const searchHandle = ({
  searchedUserName,
  dispatch,
  fetchSearchedUsersList,
  token,
}) => {
  dispatch(fetchSearchedUsersList({ token, searchedUserName }));
};

export const debouncedFn = debounce(searchHandle);