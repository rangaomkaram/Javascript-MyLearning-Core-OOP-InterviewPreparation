# HTTP request methods
<p>HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. Although they can also be nouns, these request methods are sometimes referred to as HTTP verbs. Each of them implements a different semantic, but some common features are shared by a group of them: e.g. a request method can be safe, idempotent, or cacheable.</p>

## GET
<p>The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.</p>

## HEAD
The HEAD method asks for a response identical to a GET request, but without the response body.

## POST
The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

## PUT
The PUT method replaces all current representations of the target resource with the request payload.

## DELETE
The DELETE method deletes the specified resource.

## CONNECT
The CONNECT method establishes a tunnel to the server identified by the target resource.

## OPTIONS
The OPTIONS method describes the communication options for the target resource.

## TRACE
The TRACE method performs a message loop-back test along the path to the target resource.

## PATCH
The PATCH method applies partial modifications to a resource.

# Ajax works

### AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript

### Synchronous XMLHttpRequest (async = false) is not recommended because the JavaScript will stop executing until the server response is ready. If the server is busy or slow, the application will hang or stop.

### Synchronous XMLHttpRequest is in the process of being removed from the web standard, but this process can take many years.

### Modern developer tools are encouraged to warn about using synchronous requests and may throw an InvalidAccessError exception when it occurs.

## GET or POST?
GET is simpler and faster than POST, and can be used in most cases.

## However, always use POST requests when:

A cached file is not an option (update a file or database on the server).
Sending a large amount of data to the server (POST has no size limitations).
Sending user input (which can contain unknown characters), POST is more robust and secure than GET.

// Javascript ->  v8 engine from v8 engine we get the {console.log}, where the browser uses the inspect and console -> this is alos kind of api calling form v8 -engine which written in c++,
//from ->D8 module -> we get console e.t.c...