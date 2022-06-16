package com.usersexpenses.commentdialog

import androidx.appcompat.app.AppCompatActivity
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CommentDialogModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private val dialogTag = "DIALOG_TAG"
    override fun getName() = "CommentDialogModule"

    @ReactMethod
    fun showDialog(currentText: String, response: Callback) {
        currentActivity?.let {
            CommentDialogFragment(response).show(
                (it as AppCompatActivity).supportFragmentManager,
                dialogTag
            )
        }
    }
}
