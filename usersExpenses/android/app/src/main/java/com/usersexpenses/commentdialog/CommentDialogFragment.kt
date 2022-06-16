package com.usersexpenses.commentdialog

import android.content.DialogInterface
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import androidx.fragment.app.DialogFragment
import com.facebook.react.bridge.Callback
import com.usersexpenses.R

class CommentDialogFragment(private val response: Callback) : DialogFragment() {

    private val canceled = true
    private val saved = false

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val rootView = inflater.inflate(R.layout.fragment_comment_dialog, container)

        rootView.findViewById<Button>(R.id.cancel_button).setOnClickListener {
            response.invoke("", canceled)
            dialog?.dismiss()
        }

        rootView.findViewById<Button>(R.id.save_button).setOnClickListener {
            response.invoke(rootView.findViewById<EditText>(R.id.comment_input).text.toString(), saved)
            dialog?.dismiss()
        }

        return rootView
    }

    override fun isCancelable() = false
}