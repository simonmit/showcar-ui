<h2>Linked catalog <span class="status refactor">Needs review</span></h2>

Column separation is up to teams, here is example how to do it:

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
