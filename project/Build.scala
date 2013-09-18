import sbt._
import Keys._
import play.Project._

object ApplicationBuild extends Build {

  val appName = "play-angular-demos"
  val appVersion = "1.0-SNAPSHOT"

  val appDependencies = Seq(
    // Add your project dependencies here,
    jdbc,
    anorm,
    // Adding WebJars dependencies
    "org.webjars" % "angularjs" % "1.1.5-1",
    "org.webjars" % "requirejs" % "2.1.8",
    "org.webjars" %% "webjars-play" % "2.1.0-3",
    // Adding MongoDB dependencies
    "org.reactivemongo" %% "play2-reactivemongo" % "0.9")

  val main = play.Project(appName, appVersion, appDependencies).settings( // Add your own project settings here      
    playAssetsDirectories <+= baseDirectory / "demos")

}
