define(['dart_sdk', 'packages/flutter_web/animation', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple', 'packages/layout_grid_overview/Texts/textWidgets', 'packages/layout_grid_overview/Grid/gridWidget'], function(dart_sdk, animation, layout_grid, inherited_layout_model, layout_grid_units, layout_grid_private_units, layout_grid_couple, textWidgets, gridWidget) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__scroll_controller = animation.src__widgets__scroll_controller;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__layout_builder = animation.src__widgets__layout_builder;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__rendering__box = animation.src__rendering__box;
  const LayoutGrid__src__layout_grid = layout_grid.LayoutGrid__src__layout_grid;
  const LayoutGrid__src__Util__inherited_layout_model = inherited_layout_model.LayoutGrid__src__Util__inherited_layout_model;
  const LayoutGrid__src__Util__layout_grid_units = layout_grid_units.LayoutGrid__src__Util__layout_grid_units;
  const LayoutGrid__src__Util__layout_grid_private_units = layout_grid_private_units.LayoutGrid__src__Util__layout_grid_private_units;
  const LayoutGrid__src__layout_grid_couple = layout_grid_couple.LayoutGrid__src__layout_grid_couple;
  const Texts__textWidgets = textWidgets.Texts__textWidgets;
  const Grid__gridWidget = gridWidget.Grid__gridWidget;
  const tutorialLayout = Object.create(dart.library);
  let JSArrayOfLayoutUnit = () => (JSArrayOfLayoutUnit = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit)))();
  let JSArrayOfLayoutGridCouple = () => (JSArrayOfLayoutGridCouple = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)))();
  let BuildContextAndBoxConstraintsToLayoutGrid = () => (BuildContextAndBoxConstraintsToLayoutGrid = dart.constFn(dart.fnType(LayoutGrid__src__layout_grid.LayoutGrid, [src__widgets__framework.BuildContext, src__rendering__box.BoxConstraints])))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  tutorialLayout.TutorialLayout = class TutorialLayout extends src__widgets__framework.StatelessWidget {
    get scrollController() {
      return this[scrollController];
    }
    set scrollController(value) {
      this[scrollController] = value;
    }
    build(context) {
      return new src__widgets__basic.Padding.new({padding: const$ || (const$ = dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: 50.0}))), child: new src__widgets__layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => new LayoutGrid__src__layout_grid.LayoutGrid.new({width: constraints.maxWidth, scrollController: this.scrollController, layoutModel: LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.of(context), columns: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 0.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.new({minUnit: new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 400.0}), unit: new LayoutGrid__src__Util__layout_grid_units.LayoutFraction.new({fraction: 2})}), new LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.new({maxUnit: new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 100.0}), unit: new LayoutGrid__src__Util__layout_grid_units.LayoutFraction.new({fraction: 1})}), new LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.new({minUnit: new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 400.0}), unit: new LayoutGrid__src__Util__layout_grid_units.LayoutFraction.new({fraction: 2})})]), rows: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 50.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: dart.notNull(constraints.maxHeight) - 100}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 100.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: dart.notNull(constraints.maxHeight) - 50})]), couples: JSArrayOfLayoutGridCouple().of([new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new Texts__textWidgets.FirstText.new({$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 25, file: "org-dartlang-app:///packages/layout_grid_overview/tutorialLayout.dart", parameterLocations: const$0 || (const$0 = dart.constList([], src__widgets__widget_inspector._Location))})))}), col0: 0, col1: 1, row0: 0, row1: 1, modelKey: "Text"}), new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new Grid__gridWidget.FirstGrid.new({$creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 25, file: "org-dartlang-app:///packages/layout_grid_overview/tutorialLayout.dart", parameterLocations: const$2 || (const$2 = dart.constList([], src__widgets__widget_inspector._Location))})))}), col0: 2, col1: 3, row0: 0, row1: 1, modelKey: "Grid"}), new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new Texts__textWidgets.SecondText.new({$creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 25, file: "org-dartlang-app:///packages/layout_grid_overview/tutorialLayout.dart", parameterLocations: const$4 || (const$4 = dart.constList([], src__widgets__widget_inspector._Location))})))}), col0: 0, col1: 1, row0: 2, row1: 3})]), $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 18, file: "org-dartlang-app:///packages/layout_grid_overview/tutorialLayout.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 13, name: "width"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 13, name: "scrollController"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 13, name: "layoutModel"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 13, name: "columns"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 13, name: "rows"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 13, name: "couples"})))], src__widgets__widget_inspector._Location))})))}), BuildContextAndBoxConstraintsToLayoutGrid()), $creationLocationd_0dea112b090073317d4: const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/tutorialLayout.dart", parameterLocations: const$15 || (const$15 = dart.constList([const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 9, name: "builder"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/tutorialLayout.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 7, name: "padding"}))), const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (tutorialLayout.TutorialLayout.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[scrollController] = new src__widgets__scroll_controller.ScrollController.new();
    tutorialLayout.TutorialLayout.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = tutorialLayout.TutorialLayout.prototype;
  dart.addTypeTests(tutorialLayout.TutorialLayout);
  const scrollController = Symbol("TutorialLayout.scrollController");
  dart.setMethodSignature(tutorialLayout.TutorialLayout, () => ({
    __proto__: dart.getMethods(tutorialLayout.TutorialLayout.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(tutorialLayout.TutorialLayout, "package:layout_grid_overview/tutorialLayout.dart");
  dart.setFieldSignature(tutorialLayout.TutorialLayout, () => ({
    __proto__: dart.getFields(tutorialLayout.TutorialLayout.__proto__),
    scrollController: dart.fieldType(src__widgets__scroll_controller.ScrollController)
  }));
  dart.trackLibraries("packages/layout_grid_overview/tutorialLayout", {
    "package:layout_grid_overview/tutorialLayout.dart": tutorialLayout
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/tutorialLayout.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAYmB;;;;;;UAGS;AACxB,YAAO,+CACU,gGAAiC,iBAEzC,6DACI,SAAc,SAAwB,gBAEtC,wDAEE,AAAY,WAAD,6BAEA,oCAEgB,sEAAG,OAAO,YAEnC,0BACP,sEAAoB,OACpB,wEAAsB,sEAAoB,eAAY,2EAAyB,OAC/E,wEAAsB,sEAAoB,eAAY,2EAAyB,OAC/E,wEAAsB,sEAAoB,eAAY,2EAAyB,eAE3E,0BACJ,sEAAoB,QACpB,sEAA0C,aAAtB,AAAY,WAAD,cAAa,OAC5C,sEAAoB,SACpB,sEAA0C,aAAtB,AAAY,WAAD,cAAa,iBAGrC,gCACP,sEACU,2XACF,SAAS,SAAS,SAAS,aACvB,UAEZ,sEACU,yXACF,SAAS,SAAS,SAAS,aACvB,UAEZ,sEACU,4XACF,SAAS,SAAS,SAAS;IAO/C;;;QAtDM;;IAGW,yBAAmB;AAF/B,iEAAW,GAAG;;EAAC","file":"tutorialLayout.ddc.js"}');
  // Exports:
  return {
    tutorialLayout: tutorialLayout
  };
});

//# sourceMappingURL=tutorialLayout.ddc.js.map
