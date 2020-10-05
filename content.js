function handleParticipants() {
  console.clear();
  iterateParticipants(0);
}

function iterateParticipants(i) {
  if (activeParticipant(i) != undefined) {
    console.log(participantName(i));
    console.log(participantVideo(i));
    console.log(participantAudio(i));
    return iterateParticipants(i + 1);
  }
  return;
}

let activeParticipant = (i) =>
  document.getElementsByClassName("participants-li")[i];

let participantName = (i) =>
  activeParticipant(i).getElementsByClassName(
    "participants-item__display-name"
  )[0].innerHTML;

let participantVideo = (i) => {
  if (
    activeParticipant(i).getElementsByClassName(
      "participants-icon__participant-video--started"
    ).length != 0
  ) {
    return true;
  }
  return false;
};

let participantAudio = (i) => {
  if (
    activeParticipant(i).getElementsByClassName(
      "participants-icon__participants-mute"
    ).length != 0
  ) {
    return true;
  }
  return false;
};

var observer = new MutationObserver(function (mutations, me) {
  var menuOpen = document.getElementsByClassName("participants-ul")[0];
  if (menuOpen) {
    handleParticipants();
  }
});

observer.observe(document, {
  childList: true,
  subtree: true,
});
