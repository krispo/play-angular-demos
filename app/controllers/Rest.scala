package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json._

object Rest extends Controller {
  
  def getData = Action {    
    Ok("This is the data from server!")
  }
  
}