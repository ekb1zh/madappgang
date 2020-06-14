import * as T from '../../middle/types';

// Google apps script event object: https://developers.google.com/apps-script/guides/web
type GoogleAppsScriptEvent = {
  queryString: string | null, // The value of the query string portion of the URL, or null if no query string is specified name=alice&n=1&n=2
  parameter: Object, // An object of key/value pairs that correspond to the request parameters. Only the first value is returned for parameters that have multiple values. {"name": "alice", "n": "1"}
  parameters: Object, // An object similar to e.parameter, but with an array of values for each key {"name": ["alice"], "n": ["1", "2"]}
  contextPath: string, // Not used, always the empty string.
  contentLength: number, // The length of the request body for POST requests, or -1 for GET requests 332
  postData: {
      length: number, // The same as e.contentLength 332
      type: string, // The MIME type of the POST body text/csv
      contents: string, // The content text of the POST body Alice,21
      name: string // Always the value "postData" postData
  }
}

// Код сервера
function doPost(event: GoogleAppsScriptEvent) {
  const data: T.Data = JSON.parse(event.postData.contents);
  const prettyData = JSON.stringify(data, null, '   ');

  MailApp.sendEmail({
    to: data.email,
    subject: 'Email from www.madappgang.com',
    body: prettyData,
  })

  return ContentService.createTextOutput(event.postData.contents);
}

function doGet() {
  return ContentService.createTextOutput('Server working normal');
}