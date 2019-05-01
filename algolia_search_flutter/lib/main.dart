import 'package:flutter/material.dart';
import 'search_widget.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Algolia Flutter Demo',
      home: SearchWidget(),
    );
  }
}
