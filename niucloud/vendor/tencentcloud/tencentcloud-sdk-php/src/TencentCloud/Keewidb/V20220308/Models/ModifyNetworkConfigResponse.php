<?php
/*
 * Copyright (c) 2017-2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
namespace TencentCloud\Keewidb\V20220308\Models;
use TencentCloud\Common\AbstractModel;

/**
 * ModifyNetworkConfig返回参数结构体
 *
 * @method boolean getStatus() 获取执行状态。<ul><li>true：执行成功。</li><li>false：执行失败。</li></ul>
 * @method void setStatus(boolean $Status) 设置执行状态。<ul><li>true：执行成功。</li><li>false：执行失败。</li></ul>
 * @method string getSubnetId() 获取修改后的子网 ID。
 * @method void setSubnetId(string $SubnetId) 设置修改后的子网 ID。
 * @method string getVpcId() 获取修改后的私有网络 ID。
 * @method void setVpcId(string $VpcId) 设置修改后的私有网络 ID。
 * @method string getVip() 获取修改后的 VIP 地址。
 * @method void setVip(string $Vip) 设置修改后的 VIP 地址。
 * @method string getRequestId() 获取唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
 * @method void setRequestId(string $RequestId) 设置唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
 */
class ModifyNetworkConfigResponse extends AbstractModel
{
    /**
     * @var boolean 执行状态。<ul><li>true：执行成功。</li><li>false：执行失败。</li></ul>
     */
    public $Status;

    /**
     * @var string 修改后的子网 ID。
     */
    public $SubnetId;

    /**
     * @var string 修改后的私有网络 ID。
     */
    public $VpcId;

    /**
     * @var string 修改后的 VIP 地址。
     */
    public $Vip;

    /**
     * @var string 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    public $RequestId;

    /**
     * @param boolean $Status 执行状态。<ul><li>true：执行成功。</li><li>false：执行失败。</li></ul>
     * @param string $SubnetId 修改后的子网 ID。
     * @param string $VpcId 修改后的私有网络 ID。
     * @param string $Vip 修改后的 VIP 地址。
     * @param string $RequestId 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    function __construct()
    {

    }

    /**
     * For internal only. DO NOT USE IT.
     */
    public function deserialize($param)
    {
        if ($param === null) {
            return;
        }
        if (array_key_exists("Status",$param) and $param["Status"] !== null) {
            $this->Status = $param["Status"];
        }

        if (array_key_exists("SubnetId",$param) and $param["SubnetId"] !== null) {
            $this->SubnetId = $param["SubnetId"];
        }

        if (array_key_exists("VpcId",$param) and $param["VpcId"] !== null) {
            $this->VpcId = $param["VpcId"];
        }

        if (array_key_exists("Vip",$param) and $param["Vip"] !== null) {
            $this->Vip = $param["Vip"];
        }

        if (array_key_exists("RequestId",$param) and $param["RequestId"] !== null) {
            $this->RequestId = $param["RequestId"];
        }
    }
}
