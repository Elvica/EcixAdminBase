<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class MessageCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
       //dd(request());

        //dd(request());

        return [
            'user_from_id' => 'required|exists:users,id',
            'user_to_id' => 'required|exists:users,id',
            'subject' => 'required',
            'body' => 'required|min:3'
        ];

    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'user_from_id' => decrypt($this->user_from_id),
            'user_to_id' => decrypt($this->user_to_id),
        ]);
    }
}
