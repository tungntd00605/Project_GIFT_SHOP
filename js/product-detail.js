jssor_2_slider_init1 = function() {

    var jssor_2_options = {
      $AutoPlay: 1,
      $AutoPlaySteps: 5,
      $SlideDuration: 160,
      $SlideWidth: 200,
      $SlideSpacing: 3,
      $Cols: 5,
      $Align: 390,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$,
        $Steps: 5
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 980;

    function ScaleSlider1() {
        var containerElement1 = jssor_2_slider.$Elmt.parentNode;
        var containerWidth1 = containerElement1.clientWidth;

        if (containerWidth) {

            var expectedWidth1 = Math.min(MAX_WIDTH || containerWidth1, containerWidth1);

            jssor_2_slider.$ScaleWidth(expectedWidth1);
        }
        else {
            window.setTimeout(ScaleSlider1, 30);
        }
    }

    ScaleSlider1();

    $Jssor$.$AddEvent(window, "load", ScaleSlider1);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider1);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider1);
    /*#endregion responsive code end*/
};

jssor_2_slider_init1();
