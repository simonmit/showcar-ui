<h2>Linked catalog <span class="status approved">Approved</span></h2>

Column separation is up to teams, here is an example how to do it:

<pre>
    <code class="css">
.sc-linked-catalog--example {
  columns: 1;

  @include mqmin($viewportM) {
    columns: 3;
  }

  @include mqmin($viewportL) {
    columns: 4;
  }
}
    </code>
</pre>
