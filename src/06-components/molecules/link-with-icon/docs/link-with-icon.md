<h2>Link with icon<span class="status refactor">Needs review</span></h2>

You can always place an icon inside of link element and style it accordingly.  
Use `sc-link-with-icon` class for color styling. Position and size of icon is up to you, but you may take this as example:

<pre>
    <code class="css">
    .sc-link-with-icon--example {
        margin-top: 0;
        padding: $L;
        text-align: right;

        as24-icon {
            width: $M;
            height: $M;
            margin-right: #S;
        }
    }
    </code>
</pre>

<style>
.sc-link-with-icon--example {
    margin-top: 0;
    padding: 16px;
    text-align: right;
}

.sc-link-with-icon--example as24-icon {
    width: 12px;
    height: 12px;
    margin-right: 8px;
}
</style>
