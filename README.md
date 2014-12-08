UnUTM
=====

A JavaScript library removes Urchin Traffic Monitor (UTM) parameters from URL.


INSTALL
-------

Install with Bower

    $ bower install unutm


USAGE
-----

Invoke this library by adding following HTML code to HTML:

    <script src="/bower_components/unutm/unutm.min.js"></script>


### Google Analytics (Experimental)

Load `unutm_ga.js` instead of `unutm.js` before Google Analytics, and invoke
with `hitCallback` function:

    <script src="/bower_components/unutm/unutm_ga.js"></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-XXXXXXXX-X', 'auto');
      ga('send', 'pageview', {
        'hitCallback': unutm
      });
    </script>


LICENSE
-------

MIT: http://hail2u.mit-license.org/2013
