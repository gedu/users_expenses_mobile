package com.usersexpenses.commentdialog

import androidx.appcompat.app.AppCompatActivity
import com.facebook.react.bridge.*

class CommentDialogModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private val dialogTag = "DIALOG_TAG"
    override fun getName() = "CommentDialogModule"

    @ReactMethod
    fun showDialog(currentText: String, response: Promise) {
        currentActivity?.let {
            CommentDialogFragment(currentText, response).show(
                (it as AppCompatActivity).supportFragmentManager,
                dialogTag
            )
        }
    }
}
