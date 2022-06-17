package com.usersexpenses.commentdialog

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import androidx.fragment.app.DialogFragment
import com.facebook.react.bridge.Promise
import com.usersexpenses.R

class CommentDialogFragment(private val currentText: String, private val response: Promise) :
    DialogFragment() {

    private val canceledCode = "10"
    private val canceledMsg = "Canceled by user"

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val rootView = inflater.inflate(R.layout.fragment_comment_dialog, container)
        val input = rootView.findViewById<EditText>(R.id.comment_input)
        input.setText(currentText)

        rootView.findViewById<Button>(R.id.cancel_button).setOnClickListener {
            response.reject(canceledCode, canceledMsg)
            dialog?.dismiss()
        }

        rootView.findViewById<Button>(R.id.save_button).setOnClickListener {
            response.resolve(input.text.toString())
            dialog?.dismiss()
        }

        return rootView
    }

    override fun isCancelable() = false
}