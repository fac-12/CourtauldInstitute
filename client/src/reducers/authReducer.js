const dummyState = {
  id: 1,
  first_name: "Shannon",
  last_name: "Wedgwood",
  email: "shannonjensen@gmail.com",
  type: "volunteer"
};

export default function(state = dummyState, action) {
  switch (action.type) {
  default:
    return state;
  }
}
