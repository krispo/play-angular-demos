package controllers

import play.api._
import play.api.mvc._

object Rest extends Controller {
  def getData = Action {
    Ok("Data from server!")
  }
}