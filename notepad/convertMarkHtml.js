// HTML tag used to represent a mark annotation
Mark.static.tagName = "mark";

// Called during import from HTML. If matched `fromHtml` is called. 
// We don't need to implement it, since it's defined on the Annotation class.
Mark.static.matchElement = function($el) {
  return $el.is("mark");
};

// <p><mark>Substance</mark> is a JavaScript library for web-based content editing. Build simple text editors or full-featured publishing systems. Substance provides you building blocks for your very custom editor.</p>
// <div class="todo" data-done="0">Water the plants</div>
// <div class="todo" data-done="1">Fix bug</div>
// <div class="todo" data-done="1">Do taxes</div>