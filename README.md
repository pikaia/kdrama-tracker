# kdrama-tracker
Chrome extension for tracking kdramas views

This extension is designed for use with https://www1.dramacool.cr/ and a custom google sheet.
## Idea 1
The goal is to monitor the left content pane for new episodes of popular drama. This grid is a 9x4 table. We can check a google sheet which contains the last episode watched.

## Idea 2
Alternatively, we can assume that the goolge sheet is always updated and go to the link for the next episode. It should look like:
```
<div class="block-watch">The following <strong>Blind (2022) Episode 15</strong> English SUB has been released. 
Dramacool will always be the first to have the episode so please Bookmark and add us on Facebook for update!!! Enjoy.
          <br><br>        
        <div id="bg_6211286718"></div><script data-cfasync="false" type="text/javascript" src="//platform.bidgear.com/ads.php?domainid=6211&amp;sizeid=28&amp;zoneid=6718"></script>      
</div>
```
For this idea, we hv to check that:
- A DIV with block-watch class should exist.
- The phrase *English SUB* is included in the div.

When the episode is not available yet, we will get:
```
<div class="block watch-drama">
            <div class="info-drama">
        <div class="name"><h1>Blind (2022) Episode 16 | Dramacool </h1></div>
        <div class="category">
          <span>Category: </span><a href="/drama-detail/blind-" title="Blind (2022)">Blind (2022)</a>
        </div>
    </div>
          <img src="https://www1.dramacool.cr/images/coming.jpg" alt="coming">    
    <p class="note">Dear valued customer,<br>
...
</div>
  ```
- A DIV with block watch-drama class should exist.
- It should contain an img pointing to coming.jpg


