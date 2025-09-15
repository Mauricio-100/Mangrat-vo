export function saveState(state){
  localStorage.setItem("jwt",state.jwt);
  localStorage.setItem("apiToken",state.apiToken);
}

export function loadState(state){
  state.jwt=localStorage.getItem("jwt");
  state.apiToken=localStorage.getItem("apiToken");
}
