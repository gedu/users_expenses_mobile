package com.usersexpenses.widgets


import android.content.Context
import android.graphics.Typeface
import android.util.AttributeSet
import androidx.appcompat.widget.AppCompatButton


class ElevatedButton @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
): AppCompatButton(context, attrs, defStyleAttr) {

    init {
        val face =  Typeface.createFromAsset(context.assets, "fonts/Quicksand-Bold.ttf")
        this.typeface = face
    }
}