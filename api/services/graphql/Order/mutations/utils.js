const generateErrorMsg = statusCode => {
  const errorMessages = {
    1: 'to be accepted',
    2: 'to be completed',
    3: 'to be canceled',
    4: 'to be reviewed',
  };

  return `Could not update the order ${errorMessages[statusCode]} with status code ${statusCode}.`;
};


const generateStatusMsg = statusCode => {
  const statusMsgs = {
    0: "Pending",
    1: "Accepted",
    2: "Completed",
    3: "Canceled",
    4: "Reviewed"
  }

  return statusMsgs[statusCode];
}
module.exports = {
  generateErrorMsg,
  generateStatusMsg
};
