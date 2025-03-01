<template>
    <el-dialog v-model="showDialog" :title="t('tencentSms')" width="580px" :destroy-on-close="true">
        <el-form :model="formData" label-width="140px" ref="formRef" :rules="formRules" class="page-form" v-loading="loading">
            <el-form-item :label="t('isUse')">
                <el-radio-group v-model="formData.is_use">
                    <el-radio :label="1">{{ t('startUsing') }}</el-radio>
                    <el-radio :label="0">{{ t('statusDeactivate') }}</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item :label="t('tencentSign')" prop="sign">
                <el-input v-model.trim="formData.sign" :placeholder="t('tencentSignPlaceholder')" class="input-width" show-word-limit clearable />
            </el-form-item>

            <el-form-item :label="t('tencentAppId')" prop="app_id">
                <el-input v-model.trim="formData.app_id" :placeholder="t('tencentAppIdPlaceholder')" class="input-width" show-word-limit clearable />
            </el-form-item>

            <el-form-item :label="t('tencentSecretId')" prop="secret_id">
                <el-input v-model.trim="formData.secret_id" :placeholder="t('tencentSecretIdPlaceholder')" class="input-width" clearable />
            </el-form-item>

            <el-form-item :label="t('tencentSecretKey')" prop="secret_key">
                <el-input v-model.trim="formData.secret_key" :placeholder="t('tencentSecretKeyPlaceholder')" class="input-width" clearable />
            </el-form-item>

        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="showDialog = false">{{ t('cancel') }}</el-button>
                <el-button type="primary" :loading="loading" @click="confirm(formRef)">{{t('confirm')}}</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { t } from '@/lang'
import type { FormInstance } from 'element-plus'
import { getSmsInfo, editSms } from '@/app/api/notice'

const showDialog = ref(false)
const loading = ref(true)

/**
 * 表单数据
 */
const initialFormData = {
    sms_type: '',
    sign: '',
    access_key: '',
    secret_key: '',
    is_use: '',
    app_id:'',
    secret_id:'',
}
const formData: Record<string, any> = reactive({ ...initialFormData })

const formRef = ref<FormInstance>()

// 表单验证规则
const formRules = computed(() => {
    return {
        sign: [
            { required: true, message: t('tencentSignPlaceholder'), trigger: 'blur' }
        ],
        app_id: [
            { required: true, message: t('tencentAppIdPlaceholder'), trigger: 'blur' }
        ],
        secret_id: [
            { required: true, message: t('tencentSecretIdPlaceholder'), trigger: 'blur' }
        ],
        secret_key: [
            { required: true, message: t('tencentSecretKeyPlaceholder'), trigger: 'blur' }
        ]
    }
})

const emit = defineEmits(['complete'])

/**
 * 确认
 * @param formEl
 */
const confirm = async (formEl: FormInstance | undefined) => {
    if (loading.value || !formEl) return

    await formEl.validate(async (valid) => {
        if (valid) {
            loading.value = true

            const data = formData

            editSms(data).then(res => {
                loading.value = false
                showDialog.value = false
                emit('complete')
            }).catch(() => {
                loading.value = false
                // showDialog.value = false
            })
        }
    })
}

const setFormData = async (row: any = null) => {
    loading.value = true
    Object.assign(formData, initialFormData)
    if (row) {
        const data = await (await getSmsInfo(row.sms_type)).data
        Object.keys(formData).forEach((key: string) => {
            if (data[key] != undefined) formData[key] = data[key]
            if (data.params[key] != undefined) formData[key] = data.params[key].value
        })
    }
    loading.value = false
}

defineExpose({
    showDialog,
    setFormData
})
</script>

<style lang="scss" scoped></style>
