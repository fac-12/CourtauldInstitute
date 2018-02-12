const dummyState = {
  id: 1,
  first_name: "Shannon",
  last_name: "Wedgwood",
  email: "shannonjensen@gmail.com",
  type: "volunteer",
  why_volunteer: "",
  about_me: "",
  picture_url: "https://i.imgur.com/kVzhOoJ.jpg"
};

export default function(state = dummyState, action) {
  switch (action.type) {
  default:
    return state;
  }
}
