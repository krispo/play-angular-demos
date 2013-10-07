package controllers

import play.api.mvc._
import scala.concurrent._
import scala.concurrent.ExecutionContext.Implicits.global
import play.modules.reactivemongo._
import play.modules.reactivemongo.json.collection.JSONCollection
import play.api.libs.json._

object Auth extends Controller with MongoController {

  def collection = db.collection[JSONCollection]("user")

  def authenticate = Action(parse.json) { implicit request =>
    Async {
      println("Request body: <<" + request.body + ">>")
      collection
        .find(request.body)
        .cursor[JsObject]
        .toList
        .map(_ match {
          case Nil =>
            println("!!! users NOT found !!!")
            NotFound
          case users =>
            println("!!! users from db: " + users)
            Ok
        })
    }
  }

}